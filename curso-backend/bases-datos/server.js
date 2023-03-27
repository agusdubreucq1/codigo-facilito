const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica'
});

connection.connect((err) => {
    if (err) {
      console.error('Error de conexión: ' + err.stack);
      return;
    }
  
    console.log('Conexión exitosa a la base de datos MySQL');
  });

  /*connection.query('CREATE TABLE tasks(id int AUTO_INCREMENT PRIMARY KEY, description varchar(255))'
  , (error, results, fields)=>{
      if(error){
          console.error(error.stack);
          return;
      }
      console.log('resultado: ', results);
      console.log('fields: ', fields);
  });*/

  app.post('/pendientes', (req, res)=>{
    connection.query(`INSERT INTO tasks(description) VALUES('${req.body.description}')`);
    res.send('insertado');
  })



app.listen(3000);

process.on('SIGINT',()=>{
  console.log('se cerro el servidor');
  connection.end();
  process.exit();
} )

