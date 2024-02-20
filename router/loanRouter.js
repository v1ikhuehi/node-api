const express = require("express")

const loanRouter = express.Router();

loanRouter.get("/", (req, res)=>{
    res.send("loan router here")
    console.log("loan router here");
})


