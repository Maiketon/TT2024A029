var mysql = require('mysql');

var conexion = mysql.createConnection({
host:'localhost',
database:'learnmatch',
user:'root',
password:''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('CONEXION EXITOSA');
    }
});
conexion.end(); 