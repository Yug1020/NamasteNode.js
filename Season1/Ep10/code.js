const https = require("node:https");

// NOTE :- WHEN THE THREADPOOL_SIZE IS 4. THE 5TH API CALL TAKES TIME AND LOAD AFTER ALL 4 LOAD SUCCESSFULLY 
//         BUT WHEN THEADPOOL SIZE IS 5. THE 5TH API CALL RUN SIMULTANIOUSLY WITH OTHER 4.

// process.env.UV_THREADPOOL_SIZE = 5


https.get("https://api.github.com/users/Yug1020", (https)=>{
    console.log("fetch yug's data")
})

https.get("https://api.github.com/users/abhay333d", (https)=>{
    console.log("fetch abhay's data")
})

https.get("https://api.github.com/users/sahiltambadkar23", (https)=>{
    console.log("fetch sahil's data")
})

https.get("https://api.github.com/users/RahulGurav82", (https)=>{
    console.log("fetch rahul's data")
})

https.get("https://api.github.com/users/Ved10ant", (https)=>{
    console.log("fetch vedant's data")
})