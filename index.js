const express = require("express")

const app = express();

const PORT = 3330

app.get("/",(req,res)=>{
    return res.json("Server is running in the docker yeah!")
})

app.listen(PORT,()=>{
    return console.log("server is running......")
})