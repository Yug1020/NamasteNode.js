import https from "https";

const a = 100;

https.get("https://beeceptor.com/",
    (res) => {
        console.log("file reading")
    }
)

setImmediate(() => {console.log("Set Immediate")})

setTimeout(() => {console.log("Timer Expired")}, 0)

Promise.resolve("promises").then(console.log)

process.nextTick(() => {console.log("nxt ticket")})

function printA(){
    console.log("a => ", a)
}

printA()

console.log("last line of code");