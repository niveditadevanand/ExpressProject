//import mongoose
const mongoose = require ('mongoose');
mongoose.connect("mongodb+srv://niveditadevanand:niveditadevanand@cluster0.ngksqae.mongodb.net/Students?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to db");
})
.catch((error)=>{
    console.log(error);
})