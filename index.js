const express = require("express")//call express
const app = express()
const path = require("path")

const passport = require("passport")
const mongoose = require("mongoose")
//const routes = require("./routes/routes")
const salariesRoutes = require("./routes/salariesRoutes") 
const snitchRoutes = require("./routes/snitchRoutes") 


const workerRoutes = require("./routes/workerRoutes")     //import the route created
const signUpRoutes = require("./routes/signUpRoutes")
const loginRoutes = require("./routes/loginRoutes")
const randomRoutes = require("./routes/randomRoutes")
//const WorkerModel = require("./models/workerModel")

const signupModel = require("./models/signUp")

//const app = express()

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  });

app.set("views", path.join(__dirname, "/views"))//telling our app where it can find our views. we aresetting up our views
//dirname- points to the file where you can get views labelled views
app.set("view engine", "pug") //we are setting to the actual engine we are using (pug was installed)
app.use(express.urlencoded({ extended: true }));// whenreading data from a long fileit wont red everything
// but this tells node to read everything

//mongodb://localhost:27017
// connecting to our app
mongoose.connect("mongodb://localhost:27017/farm",
    { useNewUrlParser: true,
    useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Connected to mongo DB");
        else console.log("Error connecting to mongoDB  " + err)
    })
app.use(expressSession)
    // configuring passport
app.use(passport.initialize());
app.use(passport.session());
//................................

passport.use(signupModel.createStrategy());
passport.serializeUser(signupModel.serializeUser());
passport.deserializeUser(signupModel.deserializeUser());

    //app.use("/", routes)
app.use("/", workerRoutes)
app.use("/", signUpRoutes)
app.use("/", loginRoutes)
app.use("/", randomRoutes)
app.use("/", salariesRoutes)
app.use("/", snitchRoutes)




//create a schema and a model so as to create somthing in our database
//a schema describes the data we expect in our db and what it should look like
// we are going to create a schema for a worker. we are creating a database for a farm
// a schema defines the data that  we need and the stucture of the data
   

// create a model for  a worker thats why we are using workermodel asin getting namesthat make sense
//new mongoose.model("Worker") what will our collection  be called  we call it worker
// we shall use workerSchema to create the collection
// const workerModel = new mongoose.model("Worker",workerSchema)

// putting in input so that we can see it in our db
//new is a key word
// below we have created an object called data and passed in some values , we got the object called data and called 
//an inbuilt function called save telling it to save the collection  into the db
//as we go on we wont type the below it manually
//const data = new workerModel({
    //     name: "Irene",
    //     field: "Coffee",
    //     age:"26",
    //     salary:"10000000",
    // })
    // data.save()

    

 //async await performs on the db we have to wait for the data to come back before we send to the user
//   app.get("/", async(req, res) => {
//     const workers = await WorkerModel.find({})
   //console.log(workers)
//      res.render("index", {
//           title: "cars",
//           data: workers
//      })
//    })
//get is our function
// res meaning in your response send a file
//path joins for the path of the resource and the actual resource
//__dirname means in this current directory the file is  index.html

// create an html file, create a path for it in your server(index.js) and create a link in your index.html to your file that you have created
//leave it as work in both the server andindex.html dornt add the html on work in both index and index
// app.get("/work", (req,res) => {
//     res.send("Welcome to my work page")
// })

// app.get("/just", (req,res) => {
//     res.send("This is my home page")
// })
//this is route 
// /just was placed so that we dont have two paths that have a / otherwise they will conflict and we get an error

// app.get("/home", (req,res) => {
//     res.send("Welcome to our home page")
// })

// app.get("/profile", (req,res) => {
//     res.send("My profile")
// })

// app.get("/gallery", (req,res) => {
//     res.send("My gallery")
// })















app.listen(process.env.port || 3000)
console.log("server running on port" +  (process.env.port || 3000))

