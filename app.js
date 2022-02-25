const express = require("express")
const route =  require("./routes/index")
const user = require("./routes/users")
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")

const app = express()
const db = require("./config/keys").MongoURI

mongoose.connect(db, {useNewUrlParser: true})
.then(()=>console.log("mongodb connected"))
.catch(err=>{console.log(err)})

app.use(expressLayouts)
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

app.use("/", route)
app.use("/users", user)

app.listen(3000, ()=>{
    console.log("server started at server 3000")
})
