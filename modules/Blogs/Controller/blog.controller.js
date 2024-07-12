const Blog = require("../Model/blog.model")

//********************get all blogs************************** */
const getAllBlogs = async (req , res)=>{
    try {
        let blogs = await Blog.find({})
        res.json({masseg:"sucsses" ,blogs})
    } catch (error) {
        res.json({maseg:"error",error})
    }
}
//*********************end**************************** */

//********************creata new blog************************** */
const createNewBlog = async (req , res)=>{
    let {title , content , createdBy}= req.body;
    try {
        await Blog.insertMany({title , content , createdBy});
        res.json({maseg:"created sucssed"})
    } catch (error) {
        res.json({maseg:"error", error})
    }

}
//*********************end**************************** */

//********************update blog************************** */
const updateBlog = async (req , res)=>{
    let {id}=req.params;
    let {title , content , createdBy}=req.body;
    try {
        
        if (typeof(title||content||createdBy)  === undefined) {
            
            await res.json({maseg:"incomplete"})
            
        } else {
            await Blog.updateOne({_id:id} , {title , content , createdBy});
            res.json({maseg:"sucsses"})
        }
        
    } catch (error) {
        res.json({maseg:"error" , error})
    }
    
}
//*********************end**************************** */

//********************delete blog************************** */
const deleteBlog = async (req , res)=>{
    let {id}=req.params;
    try {
        await Blog.deleteOne({_id:id});
        res.json({maseg:"sucsses"})
    } catch (error) {
        res.json({maseg:"error" , error})
    }
}
//*********************end**************************** */

//********************seaesh by id************************** */
const searshBlog = async (req , res)=>{
    let {id} = req.params;
    try {
        const blog = await Blog.findOne({_id:id});
        res.json({blog})
    } catch (error) {
        res.json({maseg:"error" , error})
    }
}
//*********************end**************************** */

//********************seaesh by title and cntent************************** */
const searshByTitle = async (req , res)=>{
    let {title , content}=req.body;
    try {
        const blog = await Blog.findOne({title , content});
        res.json({blog})
    } catch (error) {
        res.json({maseg:"error" , error})
    }
}
//*********************end**************************** */

const searshCreatedBy = async (req , res)=>{
    let {createdBy}=req.params;
    try {
        const blog = await Blog.findOne({createdBy});
        res.json({blog})
    } catch (error) {
        res.json({maseg:"error" , error})
    }
}
//*********************end**************************** */

//********************to day************************** */
const toDay = async (req , res)=>{
    arr = []
    try {
        let blogs = await Blog.find({});
        for (let i = 0; i < blogs.length; i++) {
    let Day = blogs[i].createdAt;
    let day = new Date(Day).getDate();
    let Dates = blogs[i].Date;
    let date = new Date(Dates).getDate();
    if(day == date){
        arr.push(blogs[i])
    }else{
        res.json("not found")
    }
            
        }
        res.json({arr})
    } catch (error) {
        res.json({maseg:"error" , error})
    }
}
//*********************end**************************** */

//********************yester day************************** */
const yesterdays = async (req , res)=>{
    arr = []
    try {
        let blogs = await Blog.find({});
        for (let i = 0; i < blogs.length; i++) {
    let yesterday = blogs[i].createdAt;
    let yesterDay = new Date(yesterday).getDate();
    let Dates = blogs[i].Date;
    let date = new Date(Dates).getDate();
    date=date-1;
    if(day == date){
        arr.push(blogs[i])
    }else{
        res.json("not found")
    }
            
        }
        res.json({arr})
    } catch (error) {
        res.json({maseg:"error" , error})
    }
}
//*********************end**************************** */


module.exports={
    getAllBlogs,
    createNewBlog,
    updateBlog,
    deleteBlog,
    searshBlog,
    searshByTitle,
    searshCreatedBy,
    toDay,
    yesterdays
}