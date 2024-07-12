const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type : String  , required: true },
    email : {type : String , required: true},
    password : {type : String , required: true},
    age : {type :Number ,min: [20, 'it is small'],max:[50, 'it is old'] , required: true},
    location : {type : String , required: true},
    date: { type: Date, default: Date.now }
},
{
    timestamps : true,
}

)

module.exports=userSchema