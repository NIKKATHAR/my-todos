const jwt = require("jsonwebtoken")

exports.loginOnly = (req, res, next) => {
    try {
        const token = req.headers.authorization
        console.log(token);

        if (!token) {
            return res.status(401).json({
                sucess:false,
                message:"Token not passed"
            }) 
        }

        const { id } = jwt.verify(token, process.env.JWT_KEY)

        if (!id) {
            return res.status(401).json({
                success:false,
                message:'Invalid Token'

            })
            
        }
        next()

    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Unauthorized access"

        })
        
    }
}