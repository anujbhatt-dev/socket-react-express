const { log } = require("console")
const express = require("express")
const app = express()
const http = require("http")
const expressServer = http.createServer(app)

const {Server} = require("socket.io")
const io = new Server()

io.on("connection",(socket)=>{
    console.log("this is a great day at work")

    setTimeout(()=>{
        socket.on("disconnect",()=>{
            console.log("disconnected");
        })
    })
})

app.get("/",(req,res)=>{
    res.send("good day")
})


expressServer.listen(5000,()=>{
    console.log("running");
})