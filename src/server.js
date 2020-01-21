const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

function createAbsolutePath(relativePath) {
    return path.resolve(__dirname, relativePath);
};

app.get('/auth/authenticate', function (request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    fs.readFile(createAbsolutePath('./auth/authenticate.json'), (error, data) => {
        response.send(data);
    });
});

app.post('/auth/refreshtoken', function (request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    fs.readFile(createAbsolutePath('./auth/refreshtoken.json'), (error, data) => {
        response.send(data);
    });
});

app.use(function (request, response) {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'application/json');
    fs.readFile(createAbsolutePath('./error/error400.json'), (error, data) => {
        response.send(data);
    });
});

app.listen(3000, 'localhost', function () {
    console.log('test api listening on localhost:3000');
});