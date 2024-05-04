   //dependencies
   const express = require('express')
   const app = express()
   const mysql = require('mysql')
   const cors = require('cors')

   app.use(express.json())
   app.use(cors())
   app.use(express.static('client/public'));


   app.listen(3010, ()=>{
       console.log('Server is running on port 3010')
   })

   //mysql

   const db = mysql.createConnection({
       user: 'root',
       host: 'localhost',
       password: '',
       database: 'colleges',
   })

   // Connect to the MySQL server
db.connect((err) => {
   if (err) {
     console.error('Error connecting to the database: ' + err.stack);
     return;
   }
   console.log('Connected to database with ID: ' + db.threadId);
 });


// Endpoint to get the list of colleges for a user
app.get('/colleges', (req, res) => {
   db.query('SELECT * FROM college', (err, results) => {
       if (err) {
           return res.status(500).send({ error: 'Error fetching colleges' });
       }
       res.json(results);
   });
});






