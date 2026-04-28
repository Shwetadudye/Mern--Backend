const express = require('express');
const fs= require('fs');
const PORT = 7009;
const server = express();

//watchman middleware

const watchman = (req,res,next)=>{
    if(3+5==6){
        res.send('Bye');
        console.log('Watchman middleware, if blocked invoked');
    }else{
        next();
        console.log(
            'watchman middleware, else block and after next function invoked',
        );
    }
};

//auth middleware
const auth=(req,res,next)=>{
    const auth = true;
    if(!auth){
        res.send('bye you are not authorize');
        console.log('auth middleware , if block invoked')
    }else{
        next();
        console.log('auth middleware, else block and after next function invoked');
    }
};

server.use(watchman,auth);

server.get('/',(req,res)=>{
    console.log('home');
    res.send('home');
})

server.get('/notes',(req,res)=>{
    const fsData= fs.readFileSync('../Day_5/data.json','utf-8');
    console.log(fsData);
    console.log('e');

    res.send(fsData);
})
// start server port
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})