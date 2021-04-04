// import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const port = 3020;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const { body, validationResult } = require('express-validator');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'CarRental',
  port:3030
})
// Create a Customer
app.post('/customers', (req, res) => {
  console.log(`Creating customer ... `)
  console.log('body', req.body)
  connection.query(
    `INSERT INTO Customer(FullName,Username,Address,Email,Password,DrivingLicenseNo,Phone) VALUES ('${req.body.FullName}','${req.body.Username}',
    '${req.body.Address}','${req.body.Email}','${req.body.Password}','${req.body.DrivingLicenseNo}','${req.body.Phone}')`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});
// Login Functionality
app.post('/login', function(req,res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query('SELECT * FROM Customer WHERE Username = ? AND Password = ?', [username, password], function(err, rows) {
          if (err) throw err;
          res.send(rows[0]);
        });
    });
          
app.listen(port, () => {
  console.log(`RentAndRide app listening at http://localhost:${port}`)
})