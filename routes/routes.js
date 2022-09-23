// const { Router } = require("express")
const express = require("express") // call express
const app = express()

const router = express.Router
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/test.pug"))
     })

     app.get("/work", (req,res) => {
        res.send("Welcome to my work page")
    })
    
    app.get("/just", (req,res) => {
        res.send("This is my home page")
    })
    //this is route 
    // /just was placed so that we dont have two paths that have a / otherwise they will conflict and we get an error
    
    app.get("/home", (req,res) => {
        res.send("Welcome to our home page")
    })
    
    app.get("/profile", (req,res) => {
        res.send("My profile")
    })
    
    app.get("/gallery", (req,res) => {
        res.send("My gallery")
    })
   

    // app.listen(process.env.port || 3000)
    // console.log("server running on port" +  (process.env.port || 3000))