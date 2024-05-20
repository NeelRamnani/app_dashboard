const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

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

    // Insert the user data into the SQL table
    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];

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

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validate the input data
  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide username and password' });
  }

  // Check if the username and password match
  const checkQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(checkQuery, [username, password], (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      return res.status(500).json({ error: 'Error logging in. Please try again later.' });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Send a success response
    res.json({ message: 'Login successful' });
  });
});
//get userr//
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Error fetching users. Please try again later.' });
    }

    res.json(results);
  });
});
///


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});