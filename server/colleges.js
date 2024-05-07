const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('client/public'));

// MySQL configuration
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'colleges',
});

// Connect to the MySQL server
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to database with ID: ' + db.threadId);
});

// Endpoint to get the list of colleges with optional filtering
app.get('/colleges', (req, res) => {
    db.query('SELECT * FROM colleges', (err, results) => {
        if (err) {
            console.error('Error fetching colleges:', err);
            return res.status(500).send({ error: 'Error fetching colleges' });
        }
        res.json(results);
    });
});

// Server listening on port 3010
app.listen(3010, () => {
    console.log('Server is running on port 3010');
});

module.exports = app; // For testing or further modularization





