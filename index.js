const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser())

const users = [];


app.get("/users",(req,res)=>{
    res.send(users);
});

app.post("/users",(req,res)=>{
    users.push(req.body.user)
    res.end();
});


app.listen(3000);