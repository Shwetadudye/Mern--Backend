const express = require('express');
const fs = require('fs');

const PORT = 7010;
const server = express();

//inbuild middleware 
//1. watchman middleware

const logger = (req,res,next)=>{
    let startTime = Date.now();
    next();
    let endTime = Date.now();
    console.log(endTime -startTime);
};

//eg.2. auth middleware
const Auth = (req, res,next) =>{
    const auths = req.query.auth;
    //const auth = req.body.auth;
    console.log(auths);
    if(!auths){
        res.send("you are not authorize");
        console.log('auth middleware, if block invoked')
    }else{
        next();
        console.log("auth middleware , else block and after next function invoked");
    };
};

// use means a middleware 

server.use(logger,Auth);

server.get('/',(req,res)=>{
    console.log('home');
    res.send('home');
});

server.get('/notes', (req,res)=>{
    const fsData = fs.readFileSync('../Day_5/data.json', 'utf-8');
    console.log(fsData);
    console.log('e');

    res.send(fsData);
});

// start server port 

server.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
});