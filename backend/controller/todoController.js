const todo = require("../Models/todoModels")


exports.addtodos= async(req,res) => {
    try {
        const result = await todo.create(req.body)
        res.status(200).json({
            success:true,
            message:"todo added successfully",
            result
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error" + error
        })
        
    }
}
exports.getAllToDo= async(req,res) => {
    try {
        const result = await todo.find()
        res.status(200).json({
            count: result.length,
            result,
            success:true,
            message:"All ToDo Fetched"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error" + error
        })
        
    }
}
exports.getSingleToDo= async(req,res) => {
    try {
        if (!req.params.id) {
            throw new Error("Please Provide userId ")
            
        }
        const result = await todo.findById(req.params.id)
        res.status(200).json({
            success:true,
            message:"Single ToDo Fetched",
            result
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error" + error
        })
        
    }
}

exports.updateSingleToDo= async(req,res) => {
    try {
        if (!req.params.id) {
            throw new Error("Please Provide userId ")
            
        }
        const result = await todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            success:true,
            message:"ToDo updated sucessfully",
            result
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error" + error
        })
        
    }
}
exports.deleteAllToDo= async(req,res) => {
    try {
        const result = await todo.deleteMany()
        res.status(200).json({
            count: result.length,
            result,
            success:true,
            message:"All ToDo Deleted",
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error" + error
        })
        
    }
}
exports.deleteSingleToDo= async(req,res) => {
    try {
        const result = await todo.findByIdAndDelete(req.params.id,req.body)
        res.status(200).json({
            success:true,
            message:"All ToDo Deleted",
            result
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error" + error
        })
        
    }
}