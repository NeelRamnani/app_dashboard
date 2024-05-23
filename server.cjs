const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'imaginai'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Sign-up endpoint
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Validate the input data
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  // Check if the username or email already exists
  const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(checkQuery, [username, email], (err, result) => {
    if (err) {
      console.error('Error checking existing user:', err);
      return res.status(500).json({ error: 'Error signing up. Please try again later.' });
    }

    if (result.length > 0) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ error: 'Error signing up. Please try again later.' });
      }

      // Insert the user data into the SQL table
      const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      const values = [username, email, hashedPassword];

      db.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error('Error signing up:', err);
          return res.status(500).json({ error: 'Error signing up. Please try again later.' });
        }

        // Send a success response
        res.json({ message: 'User signed up successfully' });
      });
    });
  });
});
////contact post////
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = 'INSERT INTO contacts  (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving contact');
    } else {
      res.status(200).send('Contact saved successfully');
    }
  });
});


////

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = results[0];
      const validPassword = await bcrypt.compare(password, user.password);
      console.log('Valid password:', validPassword); // Add this line

      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // ... (existing code)
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const jwt = require('jsonwebtoken');

// Middleware function to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token from the "Authorization: Bearer <token>" header

  jwt.verify(token, 'dc7b6d0fd1645f18de913072d5e1a1d97e7b85e4954a503747ec2aae988ea9d7dcca15a234e927eb5fe597e219aff40404a42a163ffe6254fe7eacd624a79dd6', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    req.userId = decoded.userId; // Add the userId to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

// Apply the verifyToken middleware to protected routes
app.get('/api/protected', verifyToken, (req, res) => {
  // This route will be accessible only with a valid JWT token
  res.json({ message: 'Access granted' });
});
// Get users endpoint
// app.get('/api/users', (req, res) => {
//   const query = 'SELECT * FROM users';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching users:', err);
//       return res.status(500).json({ error: 'Error fetching users. Please try again later.' });
//     }
//     res.json(results);
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});