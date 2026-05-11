const express = require('express');
require('dotenv').config();

 const {Connection } = require('./config/db');

  const app = express();

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
 