const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req,res)=>{
res.send("server working");
});

app.listen(3000, ()=>{
console.log("Server Listen on http://localhost:3000");
});