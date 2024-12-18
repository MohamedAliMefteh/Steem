const jwt = require("jsonwebtoken")
require("dotenv").config();


module.exports.authMiddleware= async(req,res,next)=>{
    try{
        const token = req.headers.token
        if(!token) res.status(401).json({msg:"not authorized"})
            else{
                const verifyToken =jwt.verify(token,process.env.JWT_SECRET)
                req.userId=verifyToken.id
                next()
            }
    }
    catch(error){
        res.status(500).json({msg:"OUP something went wrong", error:error.message})
    }
}
