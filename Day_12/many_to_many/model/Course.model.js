const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  course: String,
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = { courseModel };