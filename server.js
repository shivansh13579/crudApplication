const express = require("express");

const app = express();

app.use(myMiddleware);

function myMiddleware (req,res,next){
    console.log("Inside the middle ware I created");
    next();
}

app.listen(8080,()=>{
    console.log("Server started");
})