import express from "express";
import http from "http";

const app = express()

const data = {
    name:"Yug", 
    dob: "25/08/2004",
    job: "software developer"
}

// Regular expressions in routing

// app.use("/abc", (req, res) => {
//     res.send("normal request")
// })

//regular expression where b is optional (/abc, /ac)
// app.use(/^\/ab?c$/, (req, res) => {
//     res.send("use of question mark")
// })

//regular expresssion where number of b is optional (/abc, /abbbc, /abbbbbbbbbbbbc)
// app.use(/^\/ab+c$/, (req, res) => {
//     res.send("use of addition mark")
// })

//regular expression both (? and + works) (/abc, /ac, /abc, /abbbc, /abbbbbbbbbbbbc)
// app.use(/^\/ab*c$/,(req, res) => {
//     res.send("use of multi mark")
// })

app.get(/^\/xyz/,(req, res) => {
    res.send("To match start only")
})

app.get(/fly$/, (req, res) => {
    res.send("To match end only")
})

// // query params
// app.post(/^\/api/, (req, res) => {
//     console.log(req.query)
//     res.send("query param")
// })


//route param
app.post("/api/:userId", (req, res) => {
    console.log(req.params)
    res.send("route param")
})

//This one only handles GET API call
app.get("/fetch", (req, res) => {
    res.send(data)
})

//This one only handles POST API call
app.post("/fetch", (req, res) => {
    res.send("made changes in db by making post request")
})

//This one only handles DELETE API call
app.delete("/fetch", (req, res) => {
    res.send("deleted file/folder in db by making delete request")
})

//following HTTP methods match all API calls
app.use("/hello/yug", (req, res) => {
    res.send("Hello Mr.Author")
})

app.use("/hello", (req, res) => {
    res.send("hello welcome to nothing");
});

// app.use("/", (req, res) => {
//     res.send("NamasteNode User")
// })

app.listen(3000, () => {
    console.log("Successfully started server on 3000")
})
