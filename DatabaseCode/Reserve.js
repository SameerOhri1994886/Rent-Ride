// import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const port = 3080;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'CarRental',
  port:3030
})
// Create a Reservation
app.post('/reservations', (req, res) => {
  console.log(`Creating reservation ... `)
  console.log('body', req.body)
  connection.query(
   `INSERT INTO CarReservation (CustomerID,CarID,StartDate,EndDate) VALUES ((SELECT CustomerID from Customer where CustomerID="1"),(SELECT CarID from CarInventory where Brand="Audi"),'${req.body.StartDate}','${req.body.EndDate}')`,
   (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});

app.listen(port, () => {
  console.log(`RentAndRide app listening at http://localhost:${port}`)
})