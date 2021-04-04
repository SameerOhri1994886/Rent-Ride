// import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const port = 3060;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'CarRental',
  port:3030
})
// Create an Employee
app.post('/employees', (req, res) => {
  console.log(`Creating emoloyee ... `)
  console.log('body', req.body)
  connection.query(
    `INSERT INTO Employee(FullName,Username,Email,Password) VALUES ('${req.body.FullName}','${req.body.Username}',
    '${req.body.Email}','${req.body.Password}')`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});
// Login Functionality
  app.post('/login', function(req,res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query('SELECT Username,Password FROM Employee WHERE Username = ? AND Password = ?', [username, password], function(err, rows) {
          if (err) throw err;
          res.send(rows[0]);
        });
    });
app.listen(port, () => {
  console.log(`RentAndRide app listening at http://localhost:${port}`)
})