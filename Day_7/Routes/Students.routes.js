const express = require('express');

const studentRoutes= express.Router();
studentRoutes.get('/',(req, res)=>{
    res.send('student home page');
});

studentRoutes.get('/allData',(req, res)=>{
    res.send('student all data')
});

studentRoutes.get('/student_boy', (req,res)=>{
    res.send('only boy student name .....')
});

studentRoutes.get('/student_boy/:id',(req,res)=>{
   let std_id = req.params.id;

   res.send(`student id is ${std_id}`)
})

module.exports = {studentRoutes};