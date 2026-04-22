const express = require('express');

const fs = require('fs');

const PORT = 7090;
const server = express();

const watchman = (req,res, next) =>{
    const startTime = Date.now();
    console.log(startTime);
    next();
    const endTime = Date.now();
    console.log(endTime);
    console.log(endTime-startTime);
};

server.use(watchman);

server.get('/',(req,res)=>{

    console.log("'home':",'home');
    res.send('home')
});

server.get('/notes',(req,res)=>{
    const fsData = fs.readFileSync('../Day_5/data.json', 'utf-8');
    console.log('fsData:',fsData);
    console.log('e');

    res.end(fsData);
});

server.listen(PORT, ()=>{
    console.log(`server running on${PORT}`)
})