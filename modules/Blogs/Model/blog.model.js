const mongoose = require("mongoose");

const blogSchema = require("../Schema/blog.schema")

const Blog = mongoose.model("blog",blogSchema);

module.exports=Blog