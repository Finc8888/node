'use strict';

const http = require('http');

const server = http.createServer(function (request, response) {
    console.log('Hello');
    response.end;});

server.listen(3000);
console.log('Server started')