const express = require('express');
const fs = require('fs');

const {studentRoutes} = require('./Routes/Students.routes');

const PORT = 7011;
const server= express();
server.use(express.json());

const Auth = (req,res,next)=>{
    const auths = req.body.auth;
    console.log(auths);

    if(!auths){
        res.send('Bye you are not authorize');
        console.log('auth middleware, if block invoked');
    }else{
        next();
        console.log('auth middleware, else block and after next function invoked');
    }
};

server.get('/',(req, res)=>{
    console.log('home');
    res.send('home')
});

server.get('/weather',(req,res)=>{
    console.log(req.query);
    const weather= {
        Bangaluru : 'summary',
        London : 'spring',
        Pakistan: 'Qayamat'
    };

    let city = req.query.city;
    let weathers = weather[city];

    res.send(
        `${city} weather is ${weathers}`
    )
})
server.post('/data',(req,res)=>{
    if(req.url==='/data'){
        let value= req.body;
        console.log(value);
        const data = fs.readFileSync('./package.json',{encoding:'utf-8'});
        res.status(201).json({msg:'data created✅', data});
    }else{
        res.status(404).send('something went wrong❌');
    }
});

server.use(Auth);

server.use('/std', studentRoutes);

// start server port 
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})