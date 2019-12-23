const fs = require('fs');
const path = require('path');

var serverDir = `${path.join(__dirname + "/../../server")}`;
var testDir = `${path.join(__dirname + "/../../test")}`;
var configDir = `${path.join(__dirname + "/../../config")}`;
var apiDir = `${path.join(__dirname + "/../../server/api")}`;
var controllerDir = `${path.join(__dirname + "/../../server/api/controllers")}`;
var modelDir = `${path.join(__dirname + "/../../server/api/models")}`;
var routeDir = `${path.join(__dirname + "/../../server/api/routes")}`;


module.exports.structure = () => {



    fs.mkdirSync(serverDir);
    fs.mkdirSync(apiDir);
    fs.mkdirSync(controllerDir);
    fs.mkdirSync(modelDir);
    fs.mkdirSync(routeDir);
    fs.mkdirSync(testDir);
    fs.mkdirSync(configDir);


    fs.writeFile(`${path.join(__dirname + "/../../server/server.js")}`, `const http = require('http');
const port = 3000;
const app = require('./app');
const server = http.createServer(app);
server.listen(port  || process.env.port);
    `, () => { console.log() });


    fs.writeFile(`${path.join(__dirname + "/../../server/app.js")}`, `const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);

module.exports = app;
    
    `, () => { console.log() });


    fs.writeFile(`${path.join(__dirname + "/../../server/router.js")}`, `const router = require('express').Router();

    
module.exports = router;
    `, () => { console.log() });




    fs.writeFile(`${path.join(__dirname + "/../../config/default.json")}`, `
    {
        "app": {
            "webServer": {
                "port": 300,
                "jwtSecret": "",
                "baseUrl": "http://localhost:3000"
            },
            "mail": {
                "mail": "",
                "password": "",
                "servise": ""
            }
        },
        "sql": {
            "name": "",
            "userName": "",
            "password": "",
            "host": ""
        },
        "nosql":{
            "dbname":"",
            "password:""
        }
    }
    `, () => { console.log() });



}