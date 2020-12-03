const express=require('express');
const path = require('path');
const bodyparser = require('body-parser');
const session=require('express-session');
const {env}= require('process');
const https = require("https");
var mysql = require('mysql');


var app= express();
var server= require("http").Server(app);
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
require('./routes')(app);

sqlParams = {
    connectionLimit: 1,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'praveendb'
}

// create mysql db connection pool
var connection = mysql.createPool(sqlParams);
module.exports.connection=connection;

app.get('/info',(req,res)=>{
 res.send(" App is up and running....")
});

server.listen(process.env.PORT || 9000);