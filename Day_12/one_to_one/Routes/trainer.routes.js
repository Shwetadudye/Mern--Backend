const express = require('express');
const {trainerModel} = require('../model/trainer.model');
const {userModel} = require('../model/user.model');

const trainerRoutes = express.Router();

//read path = "/student/"
trainerRoutes.get('/', async(req , res)=>{
    const trainerData = await trainerModel.find().populate('user_ID');
    res.send({msg:'all trainer data', data:trainerData});
});

trainerRoutes.get('/:id',async(req , res)=>{
    const trainerData = await trainerModel.find({ _id:req.params.id}).populate('user_ID');
    res.send({msg:`trainer id ${req.params.id} of data`, data:trainerData});
});

//create path = "/student/createtrainer"
trainerRoutes.post('/createTrainer', async(req , res)=>{
    const userData= await userModel.create(req.body);
    const trainerData= await trainerModel.create({
        ...req.body,
        user_ID: userData._id,
    });

    res.send({msg:'done', data:{user:userData, trainer : trainerData}});
});

//update
trainerRoutes.get('/',(req,res)=>{

});

//delete
trainerRoutes.get('/',(req,res)=>{

});

module.exports ={trainerRoutes};
