const cool = require("cool-ascii-faces");
const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+cool()+"</h1></body></html>")
});

app.listen(port, ()=> {
    console.log(`Server TRULY ready at port ${port}`);
});
