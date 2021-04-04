// import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const port = 3090;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'CarRental',
  port:3030
})
//Get All cars
app.get('/cars', (req, res) => {
  console.log("Fetching all cars ...")
  const sql = 'SELECT * FROM CarInventory'
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
})
// Adding a car
app.post('/cars', (req, res) => {
  console.log(`Adding a Car ... `)
  console.log('body', req.body)
  connection.query(
    `INSERT INTO CarInventory(Brand,Model,Year,Type) VALUES ('${req.body.Brand}','${req.body.Model}','${req.body.Year}','${req.body.Type}')`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});

app.listen(port, () => {
  console.log(`RentAndRide app listening at http://localhost:${port}`)
})