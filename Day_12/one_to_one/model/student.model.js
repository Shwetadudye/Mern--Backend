const mongoose= require("mongoose");
const studentSchema = mongoose.Schema(
    {
        batch: String
        
    },{
        versionKey: false,
    }
)

const studentModel = mongoose.model('student', studentSchema);

module.exports = {studentModel};