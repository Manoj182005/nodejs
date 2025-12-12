// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
const express = require("express");

const server = express();

server.get("/",(req,res) =>{
    res.send("Be a Coding Ninja.");
})
server.listen(4000,()=>{
    console.log("server is running");
})

module.exports = { server };
