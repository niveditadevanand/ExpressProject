const mongoose = require ('mongoose');
const schema = mongoose.Schema({            //variable can be any name
    Name:String,                            //Schema is a property
    Age:Number,                                //inorder to have backend validation we can add require
    Place:String,
    Phone:Number                                     
})

const userModel = mongoose.model("user",schema);        //model adds data in db.
module.exports=userModel;
