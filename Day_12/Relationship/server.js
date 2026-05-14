const express = require('express');

require('dotenv').config();

 const { Connection } = require('./config/db');
 const { studentRoutes } = require('./Routes/students.routes');
 const { trainerRoutes } = require('./Routes/trainer.routes')

  const app = express();
  
  //middleware

  app.use(express.json());

  //Route
  app.use('/student', studentRoutes);
  app.use('/trainer', trainerRoutes);

  app.listen(process.env.Port, async()=>{
    try{
     await Connection
     console.log('Db is connected✔');
    }catch{
     console.log('Db is failed ❌');
    }finally{
     console.log(`server is running on ${process.env.Port}`)
    }
  })
 