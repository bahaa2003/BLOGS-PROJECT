const express = require('express');
const connection = require('./config/config');
const blogRouter = require('./modules/Blogs/Routs/blog.routs');
const router = require('./modules/users/Routs/user.routs');
require('dotenv').config({path : "bb.env"})
const app = express();
app.use(express.json())
const port = process.env.port;

connection();

app.use(router)
app.use(blogRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))