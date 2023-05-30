const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect('mongodb+srv://mishra:mishra786@cluster0.yrprxjp.mongodb.net/mern1r?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));