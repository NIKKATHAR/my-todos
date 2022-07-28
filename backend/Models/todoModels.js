const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    task:{type:String, required:true},
    desc:{type:String, required:true},
    date:{type:Date,  required:true},
    priority:{type:String, required:true},
    category:{type:String,required:true},
    status:{
        type:String,
        default:"pending",
        enum:["inprogress", "completed", "pending"]
    }
},{timestamps:true})

module.exports = mongoose.model("todo",todoSchema)