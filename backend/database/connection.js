const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'adm',
    password: 'adm',
    database: 'movies-controll'
})

module.exports = Connection;
