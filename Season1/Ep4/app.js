var a = 12
var b = 5

// multiply(a, b)

var info = "We are in app.js file"

console.log(info)
console.log(a + b)

const {calculateSum} = require("./modulePackage")

calculateSum(a, b)

const {div} = require("./modulePackage")

div(a, b)

const data = require("./data.json") //This is how we import json file

console.log(data)

const util = require("node:util") //This is node built in module

// import { multiply } from "./multiple.js" 
//Node.js does import before running any code in app.js. 
// So it doesn't matter where do you call import