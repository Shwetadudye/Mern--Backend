const express = require('express');
require('dotenv').config();
const { Connection } = require('./config/db');
const { trainerRoutes } = require('./routes/trainer.routes');
const { studentRoutes } = require('./routes/student.routes');

const app = express();
app.use(express.json());
app.use('/trainer', trainerRoutes);
app.use('/student', studentRoutes);
app.listen(process.env.Port ,async()=>{
    try{
        await Connection;
        console.log('DB connnected ✅');
    }catch(err){
        console.log(err);
        console.log('DB disconnected❌');
    }finally{
        console.log(` server is running on port ${process.env.Port}`);
    }
})