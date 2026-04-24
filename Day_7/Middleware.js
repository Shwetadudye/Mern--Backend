const express = require('express');
const fs = require('fs');

const {studentRoutes} = require('./Routes/Students.routes');

const PORT = 7011;
const server= express();

server.get('/',(req, res)=>{
    console.log('home');
    res.send('home')
});

server.use('/std', studentRoutes);

// start server port 
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})