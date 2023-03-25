const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.urlencoded({extended: true}));

app.get('/saludo', (req, res)=>{
    res.send(`peticion respondida des / con nombre ${req.query.name}`);
});

app.post('/', (req, res)=>{
    res.send(`hola ${req.body.name}`);
})

app.listen(3000);