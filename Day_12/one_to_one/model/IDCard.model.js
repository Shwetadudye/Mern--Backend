const mongoose = require('mongoose');
const crypto = require('crypto');

function generateStudentId(name, batchYear) {
  // Generate 3 random bytes (6 hex characters)
  const randomPart = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `STU-${name}-${batchYear}-${randomPart}`; // Example: STU-2024-A1B2C3
}

const id_cardSchema = mongoose.Schema(
  {
    // id_card: new mongoose.Schema.Types.ObjectId(),
    id_card: {
      type: String,
      //   default: () => generateStudentId(new Date().getFullYear()),
      unique: true,
    },
    student_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  },
  {
    versionKey: false,
  },
);

id_cardSchema.pre('save', async function () {
  // populate student details
  await this.populate('student_ID');

  // get batch from student schema
  const batch = this.student_ID.batch;

  const name = this.student_ID.name;

  // generate id
  this.id_card = generateStudentId(name, batch);
});

const id_cardModel = mongoose.model('id_card', id_cardSchema);

module.exports = { id_cardModel };