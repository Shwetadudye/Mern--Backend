const express = require('express')

const fs = require('fs')

const PORT = 7000;

//server creation 
//clg -> a c home d b 

const server = express()

//first middleware
server.use((req,res,next)=>{
    console.log('a');
    next();
    console.log('b');
});

// second middleware 

server.use((req,res,next)=>{
    console.log('c');
    next();
    console.log('d');
});

server.get('/',(req,res)=>{
    console.log("'home':",'home');
    res.send('home')
});

// server.get('/notes',(req,res)=>{
//     fs.readFile('../Day_5/data.json', 'utf-8' ,(err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         res.send(data);
//         console.log(data);
//         console.log('e')
//     })
// });

server.get('/notes' ,(req,res)=>{
const  data =  fs.readFileSync('../Day_5/data.json', 'utf-8');
console.log(data);
console.log('e');

res.send(data);
})

server.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})