const express = require('express');
const app = express()
const mysql = require('mysql');

const db = mysql.createConnection({
    port: 3306,
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'cachInSchema'


});

app.post('/create', (req, res) =>  {
    const namewa = req.body.name;
    const boxes = req.body.boxes;
    const temp = req.body.temp;
    const location = req.body.location;
    const start = req.body.start;
    const end = req.body.end;
});

db.query('INSERT INTO cacheIn (name, boxes, temperature, location, start, end) VALUES (?,?,?,?,?,?)', (err, result) => {if (err) {
    console.log(err)
} else {
        res.send("Values Inserted")
    }
})




