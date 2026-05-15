const express = require('express');

const { studentModel } = require('../model/student.model');
const { id_cardModel } = require('../model/IdCard.model');

const studentRoutes = express.Router();

studentRoutes.get('/', async (req, res) => {
  const studentData = await studentModel.find().populate('trainer_ID');
  res.send(studentData);
});

studentRoutes.post('/createStudent', async (req, res) => {
  try {
    const studentData = await studentModel.create(req.body);
    console.log(`🚀 ~ studentData:`, studentData);

    const idGenerate = await id_cardModel.create({
      student_ID: studentData._id,
    });
    console.log(`🚀 ~ idGenerate:`, idGenerate);

    studentData.student_id_card = idGenerate._id;

    await studentData.save();

    res.send({ std: studentData, idCard_create: idGenerate });
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
});

module.exports = { studentRoutes };

/*
student schema:-

{
  "name":"rishab",
  "batch":"FSD",
  "time":11,
  "achivements":["mern","python","node"],
  "role":"student"
}
*/