const mongoose= require("mongoose");

const studentSchema = mongoose.Schema(
    {
        user_ID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        },
        batch: String,
        time: Number,
        achievements: [String],
        role:{
            type:String,
            enum: ['student', 'trainer', 'admin'],
        },
        
    },
    {
        versionKey: false,
    }
)

const studentModel = mongoose.model('Student', studentSchema);

module.exports = {studentModel};