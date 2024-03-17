const express = require ("express");
const app = express();
const mysql = require ("mysql2");
const cors = require("cors");

app.use(cors());
app.use (express.json());
//Creamos una conexion a la base de datos //
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "12345678", //MODIFICAR ESTO CHICOS, DEPENDIENDO SU MYSQL
        database: "" //AGREGUEN EL NOMBRE DE LA BASE DE DATOS//
    }
);