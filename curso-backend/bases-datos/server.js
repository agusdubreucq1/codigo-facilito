const res = require('express/lib/response');
const mysql = require('mysql');

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

connection.query('CREATE TABLE tasks(id int AUTO_INCREMENT PRIMARY KEY, description varchar(255))'
, (error, results, fields)=>{
    if(error){
        console.error(error.stack);
        return;
    }
    console.log('resultado: ', results);
    console.log('fields: ', fields);
});

connection.end();

