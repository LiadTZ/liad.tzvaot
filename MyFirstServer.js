const express = require("express");
const bodyParser = require("body-parser");
const app = express();


var http = require('http');


http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World');
})

.listen(8080);

const mysql = require("mysql");
const dbConfig = require(“./db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
host: dbConfig.HOST,
user: dbConfig.USER,
password: dbConfig.PASSWORD,
database: dbConfig.DB
});
// open the MySQL connection
connection.connect(error => {
if (error) throw error;
console.log("Successfully connected to the database.");
});
module.exports = connection;

 // new route
 app.get('path', function(req,res){
 res.send('');
 });
