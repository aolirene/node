//because we shall be using mongoose we shall import it as  const momgoose = require("mongoose")
// we are creating a model for worker you may also create for harvest. create different files for different models in model folder
//modules.export = mongoose.model("Worker", workerSchema) it exports model out of that file so that you can access it out of the file
//modules.export = mongoose.model("Worker", workerSchema) exposing content of the file you have created outside of that file 
const mongoose = require("mongoose")

const workerSchema = mongoose.Schema({
    name: String,
    field: String,
    age: Number,
    salary: Number,

})

module.exports = mongoose.model("Worker", workerSchema)//mongoose connects our model ,connectionand schema to work together

//key is name, field, age and salary. what comes after the semi colon is called the value
