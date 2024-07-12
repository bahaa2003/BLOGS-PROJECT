const {statusCode, StatusCodes} = require('http-status-codes');
const jwt = require("jsonwebtoken")
const User = require("../Model/user.model")
//********************All User************************** */
const getAllUser = async (req , res)=>{
    let {name , email , password , age , location} = req.body;
    try {
        let user = await User.find({});
        res.json({masg:"sucssus", data:user})
    } catch (error) {
        res.json({masg:"error", error})
    }
    
}
//*********************end**************************** */
// const sin_up = async (req , res)=>{
//     let {name , email , password , age , location} = req.body;
//     try {
//         let user = await User.findOne({email});
//         if (user) {
//             res.status(statusCode.BAD_REQUEST)
//         } else {
            
//         }
//     } catch (error) {
        
//     }

// }

const sing_in = async (req , res)=>{
    const {email , password}=req.body;
    try {
        const user = await User.faindOne({email});
        if (!user) {
            res.status(StatusCodes.BAD_REQUEST).json({message:"email not found"})
        } else {
            const token = jwt.sign({_id:user._id , location:user.location});
            res.status(StatusCodes.BAD_REQUEST)
        }
    } catch (error) {
        
    }
}

//********************Add User************************** */
const addUser = async (req , res)=>{
    let {name , email , password , age , location} = req.body;
    try {
        await User.insertMany({name , email , password , age , location});
        res.json({masg:"sucssus"})
    } catch (error) {
        res.json({masg:"error", error})
    }
}
//*********************end**************************** */

//********************Updata User************************** */
const updateUser = async(req,res)=>{
    let {id} = req.params;
    let {name , email , password , age , location} = req.body;
    try {
        await User.updateOne({_id:id} ,{ name , email , password , age , location});
        res.json({masg:"sucssus"})
    } catch (error) {
        res.json({masg:"error", error})
    }
}
//*********************end**************************** */


//********************Delete User************************** */
const deleteUser = async(req,res)=>{
    let {id} = req.params;
    try {
        await User.deleteOne({_id:id});
        res.json({masg:"deleted sucssus"})
    } catch (error) {
        res.json({masg:"error", error})
    }
}
//*********************end**************************** */

//********************seresh by id ************************** */

const getOneUser = async (req , res)=>{
    let {id} = req.params;
    try {
        const user = await User.findOne({_id:id});
        res.json({maseg:"sucsses" , user})
    } catch (error) {
        res.json({masg:"error", error})
    }
}
//*********************end**************************** */

//********************seresh by name&email ************************** */
const seresh = async (req,res)=>{
    let {name , email} = req.body;
    try {
        const user = await User.find({name , email});
        res.json({maseg:"sucsses" , user})
    } catch (error) {
        res.json({masg:"error", error})
    }
}
//*********************end**************************** */

//********************least age 30 ************************** */
const leastAge = async (req , res)=>{
    try {
        let user = await User.find({age: { $lt: 30 }});
        res.json({masg:"sucssus",user})
    } catch (error) {
        res.json({masg:"error", error})
    }
    
}
//*********************end**************************** */

//********************great age 30 ************************** */
const greatAge = async (req , res)=>{
    try {
        let user = await User.find({age: { $gt: 30 }});
        res.json({masg:"sucssus",user})
    } catch (error) {
        res.json({masg:"error", error})
    }
    
}
//*********************end**************************** */

//********************great or equal age 30 ************************** */
const greatOrEqualAge = async (req , res)=>{
    try {
        let user = await User.find({age: { $gte: 30 }});
        res.json({masg:"sucssus",user})
    } catch (error) {
        res.json({masg:"error", error})
    }
    
}
//*********************end**************************** */





module.exports={
    getAllUser,
    addUser,
    updateUser,
    deleteUser,
    getOneUser,
    seresh,
    leastAge,
    greatAge,
    greatOrEqualAge
}