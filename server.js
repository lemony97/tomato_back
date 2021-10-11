const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const  mysql = require('mysql');


app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', (req, res) => {    

    const userData = req.body;
    let sql = "INSERT INTO user set ?;";
    db.query(sql,userData, (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})