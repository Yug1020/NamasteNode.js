const http = require("http");

http.createServer((req, res) => {
    res.write("write on server:- Hello world\n")
    res.end("end point on server:- tata bye bye")
}).listen("5507")