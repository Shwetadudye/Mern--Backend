const express = require('express');
require('dotenv').config();
const cors = require('cors');

//routes 
 const {Connection } = require('./config/db');
 const {authModel} = require('./model/Auth.model');
 /*const {}= require('./routes/Todo.routes');
 const {}= require('./routes/User.routes');*/

 const app = express(); // express invoked creating server 

 // middleware for conversion of body coming from clien side
 app.use(express.json(),express.text(),cors());

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

 app.post('/login', async(req,res)=>{
    if(req.body===undefined || (!req.body.email && !req.body.password)){
        res.status(404).json({msg:'Not found or undefined'})
    }

    // to check user present or not

    const findUser_DB = await authModel.find({email: req.body.email}||null);
    console.log(findUser_DB);
    console.log(findUser_DB[0]);

    if(findUser_DB.length>0){
        if(
            req.body.email === findUser_DB[0].email &&
            req.body.password === findUser_DB[0].password
        ){
            res.send('Profile Match ✅')
        }else{
            res.send('incorrect password❌')
        }
    } else{
        res.send("you should siognup first becz your credintial is noty present in DB",)
    }
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