const mongoose = require("mongoose");
const schema = mongoose.Schema


const blogSchema = new schema({
    title :{type:String , required:true},
    content :{type:String , required:true},
    //createdBy:{type:blogSchema.Types.ObjectId , ref:"user"},
    createdBy :{ type: schema.Types.ObjectId, ref: 'user' },
    Date : {type : Date , default :Date.now}
},
{
    timestamps:true
})

module.exports=blogSchema