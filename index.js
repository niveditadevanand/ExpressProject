//1.import express
var express = require('express');//variable name can be anything but the other express should be same as what we installed.
const { connection } = require('mongoose');//This is from connection.js
require('./connection');

const user = require('./model/user');//This is from user.js.


//2.Initialisation
var app = express();

    //middleware
    app.use(express.json());

//3.api
app.get('/add',(req,res) =>{
    res.send("Hello");//we are not sending any request here.We will just get the response from backend.
})      // / is the path and first is request and second response . req-frontend to backend,res-backend to frontend.
                    //syntax: app.get('path',(req,res)=>)
                
                        
app.get('/login',(req,res)=>{
    res.send('Logged in successfully!!!')
})

//add data to db
    app.post('/add',(req,res)=>{
        try{
            console.log(req.body);
            user(req.body).save();
            res.send({message:"data added successfully"});
        }
        catch(error)
        {
            console.log(error)
        }
    }) 

    //to view all the users
    app.get('/view',async(req,res)=>{
        
        try{
           const data= await user.find();        //find is a keyword,user is the db model
           res.send(data);
        }
        catch(error){
             console.log(error)
        };
    })

    //to delete any user

    app.delete('/remove/:id',async(req,res)=>{
        try{
            console.log(req.params.id);
            await user.findByIdAndDelete(req.params.id);
            res.send({message:"deleted"})
        }
        catch(error){
            console.log(error)
        }
    })

    //to update

    app.put('/change/:id',async(req,res)=>{
        try{
            console.log(req.param.id);
            var data = await user.findByIdAndUpdate(req.params.id,req.body);   //req.body is given so that it can be updated
            res.send({message:"updated"})
        }
        catch(error){
            console.log(error)
        }
    })


//4.Port allocation
app.listen(3000,()=>{
    console.log("port is up and running");      //console inside a callback function
})

//for running node index.js
//nodemon - we dont have to run again and again it automatically reloads

//we will only get GET in browser so in order to check whether the api is working properly we have to use postman.

