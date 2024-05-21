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
  password: '', // Replace with your MySQL password
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

  // Insert the contact form data into the database
  const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
  connection.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error submitting contact form');
    } else {
      res.status(200).send('Contact form submitted successfully');
    }
  });
});



////
// Login endpoint
app.post('/api/login', async (req, res) => {
  const [username, password] = req.body.split(':');
  try {
      const request = new sql.Request();
      request.input('username', sql.VarChar, username);
      const result = await request.query('SELECT * FROM users WHERE username = @username');
      
      if (result.recordset.length > 0) {
          const user = result.recordset[0];
          const validPassword = await bcrypt.compare(password, user.password);
          if (validPassword) {
              res.status(200).send('Login successful');
          } else {
              res.status(401).send('Invalid password');
          }
      } else {
          res.status(404).send('User not found');
      }
  } catch (err) {
      console.error('Error during login:', err);
      res.status(500).send('Internal server error');
  }
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