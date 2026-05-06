const express = require('express');
require('dotenv').config();

const {connection, userModel}= require('./db');
// const port = 7080;

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
//read 
app.get('/user', async(req ,res)=>{
    let userData= await userModel.find();
    res.send({msg: 'data found✅', data:userData});
});

//create
app.post('/userCreate', async(req,res)=>{
    let value = req.body;
    let userData = await userModel.insertOne(value);
    console.log(userData);
    res.send({msg:'data creates✅', data: userData});
})

//Many

// app.get('/userCreate', async (req, res) => {
//     const value = req.body;
//     const userData = await userModule.updateMany(value);
//     console.log(userData);
//     res.send({msg:'data creates✅', data:userData});
//   });



app.listen(PORT, async()=>{

    try{
        await connection;
        console.log('DBis connected ✅');
    }catch(error){
        console.log(error);
        console.log('DB is disconnected❌');
    }finally{
    console.log(`server is running ${PORT}`)
    }
});