const mongoose = require("mongoose");

const DB = "mongodb+srv://aditya0karande:Aditya9082@cluster0.yevxd6h.mongodb.net/Authmern?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB,{
 
}).then(()=> console.log("Database Connected"))
   .catch((err)=>{
    console.log(err);
})