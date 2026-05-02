const fs = require("node:fs");
const https = require("node:https");

console.log("Hello world");

const a = 56466
const b = 443623

https.get(("https://dummyjson.com/products/1"), (err, http) => 
    console.log("API successfully called")
)

setTimeout(() => {console.log("5 sec completed")}, 5000)

fs.readFile("./file.txt", "utf-8", (err, file)=> {
    console.log(file)
})

function multi(a, b){
    return (a*b)
}

const result = multi(a, b)

console.log("Multiplication of a and b is:- ", result)