const user = require("./../Models/userModels")
const bcrypt = require("bcryptjs")

exports.addUsers = async(req, res) => {
    try {
        const {password} = req.body
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(password, salt)

        const result = await user.create(req.body)
        res.status(200).json({
            result,
            success: true,
            message: "User added successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
        
    }
}

exports.getAllUsers = async(req, res) => {
    try {
        const result = await user.find()
        res.status(200).json({
            count: result.length,
            result,
            success: true,
            message: "All users fetched "
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
        
    }
}

exports.getSingleUser = async(req,res) => {
    try {
        if (!req.params.id) {
            throw new Error("Please provide user id")  
        }
        
        const result = await user.findById(req.params.id)
        res.status(200).json({
            result,
            success:true,
            message: "single user fetched"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: "Error" + error
        })
        
    }
}

exports.updateSingleUser = async(req,res) => {
    try {
        const result = await user.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            result,
            success:true,
            message: "user updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: "Error" + error
        })
        
    }
}


exports.deleteSingleUser = async(req,res) => {
    try {
        const result = await user.findByIdAndDelete(req.params.id)
        res.status(200).json({
            result,
            success:true,
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: "Error" + error
        })
        
    }
}


exports.deleteAllUser = async(req,res) => {
    try {
        const result = await user.deleteMany()
        res.status(200).json({
            result,
            success:true,
            message: "All Users deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: "Error" + error
        })
        
    }
}

