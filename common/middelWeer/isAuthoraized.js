const { StatusCodes } = require("http-status-codes");

const jwt = require("jsonwebtoken");


module.exports=()=>{
    return (req , res , next)=>{
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            if(token){
                try {
                    const decoded = jwt.verify(token , "shhhhh");
                    req.user = decoded;
                    next()
                } catch (error) {
                    res.json({message:error})
                }
            }else{
                res.status(StatusCodes.UNAUTHORIZED).json({message:"unauthorized"})
            }
        }
    }
}