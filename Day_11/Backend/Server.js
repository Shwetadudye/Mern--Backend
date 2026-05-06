const express = require('express');
require('dotenv').config();


//routes 
 const {Connection } = require('./config/db');
 const {authModel} = require('./model/Auth.model');
 /*const {}= require('./routes/Todo.routes');
 const {}= require('./routes/User.routes');*/

 const app = express(); // express invoked creating server 

 // middleware for conversion of body coming from clien side
 app.use(express.json(),express.text());

 //sign

 app.post('/signup', async(req , res)=>{
    console.log(req.body);
    if(req.body===undefined ||(!req.body.email && !req.body.password)){
        res.status(404).json({msg:'Not found or undefined'});
    }else{
        const userDataSave = new authModel(req.body);
        console.log(userDataSave);
        await userDataSave.save();
        res.status(201).send({msg:'created data in DB', data:userDataSave});
    }
 });

 //login 

 app.post('/login', (req,res)=>{
    res.send('login')
 });

 // routing on backend

 // server start 

 app.listen(process.env.PORT, async()=>{
    try{
        await Connection;
        console.log('DB is connected');
    }catch(err){
        console.log(err);
        console.log('Db is disconnected')
    } finally{
        console.log(`server is running on ${process.env.PORT}`)
    }
 })