const express = require('express');

const {trainerModel} = require('../model/trainer.model');

const trainerRoutes = express.Router();

trainerRoutes.post('/createTrainer', async(req , res)=>{
    const trainerData = await trainerModel.create(req.body);
    res.send({msg:'trainer created', trainer:trainerData});
});
module.exports ={trainerRoutes};