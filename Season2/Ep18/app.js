import express from "express";
import {RH1, RH2, errHandler} from "./controller.js"
import { authAdmin, authUser } from "./middlewares/auth.js"

const app = express()


app.get("/admin/getData", authAdmin, RH1)

app.get("/user/getData", authUser, RH2)

app.use("/", errHandler)

app.listen(3000, ()=> {console.log("Successfully live on 3000")})