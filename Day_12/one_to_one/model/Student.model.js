const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    name: String,
    batch: Number,
    time: Number,
    achivements: [String],
    role: {
      type: String,
      eunm: ['student', 'trainer', 'admin'],
    },
    student_id_card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'id_card',
    },
  },
  {
    versionKey: false,
  },
);

const studentModel = mongoose.model('Student', studentSchema);

module.exports = { studentModel };