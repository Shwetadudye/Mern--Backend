const express = require('express');

const studentRoutes= express.Router();
studentRoutes.get('/',(req, res)=>{
    res.send('srudent home page');
});

studentRoutes.get('/allData',(req, res)=>{
    res.send('student all data')
});

studentRoutes.get('/student_boy', (req,res)=>{
    res.send('only boy student name .....')
})

module.exports = {studentRoutes};