const http = require("http");

http.createServer((req, res) => {
    res.write("write on server:- Hello world\n")
    res.end("end point on server:- tata bye bye")
}).listen("5507")


// command to run

// node server.js
// then hit a request by opening localhost:5507 on browser then you will see the result on browser