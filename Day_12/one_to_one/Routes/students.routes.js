const express = require('express');

const {studentModel} = require('../model/student.model');
const {userModel} = require('../model/user.model');

const studentRoutes = express.Router();

//read path = "/student/"
studentRoutes.get('/', async(req , res)=>{
    const studentData = await studentModel.find().populate('user_ID');
    res.send({msg:'all student data', data:studentData});
});

studentRoutes.get('/:id',async(req , res)=>{
    const studentData = await studentModel.find({ _id:req.params.id}).populate('user_ID');
    res.send({msg:`student id ${req.params.id} of data`, data:studentData});
});

//create path = "/student/createstudent"
studentRoutes.post('/createStudent', async(req , res)=>{
    const userData= await userModel.create(req.body);
    const studentData= await studentModel.create({
        ...req.body,
        user_ID: userData._id,
    });

    res.send({msg:'done', data:{user:userData, student:studentData}});
});

//update
studentRoutes.get('/',(req,res)=>{

});

//delete
studentRoutes.get('/',(req,res)=>{

});

module.exports ={studentRoutes};
