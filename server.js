const express = require("express")
const app = express()
const port = process.env.PORT || 3000
var d = new Date();
app.get("/",(req,res)=>{
    res.send(d.toISOString().slice(0,10))
})
app.listen(port,()=>{
    console.log("Listening on port ",port)
})