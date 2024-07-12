const { getAllBlogs, createNewBlog, updateBlog, deleteBlog, searshBlog, searshByTitle, searshCreatedBy, toDay, yesterdays } = require("../Controller/blog.controller");

const blogRouter = require("express").Router();

blogRouter.get("/blogs", getAllBlogs)
blogRouter.post("/createNewBlog", createNewBlog)
blogRouter.put("/updateBlog/:id", updateBlog)
blogRouter.delete("/deleteBlog/:id", deleteBlog)
blogRouter.get("/searshBlog/:id", searshBlog)
blogRouter.get("/searshByTitle", searshByTitle)
blogRouter.get("/searshCreatedBy/:createdBy", searshCreatedBy)
blogRouter.get("/toDay", toDay)
blogRouter.get("/yesterdays", yesterdays)

module.exports=blogRouter

