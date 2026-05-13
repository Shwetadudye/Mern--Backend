const mongoose= require("mongoose");
const trainerSchema= mongoose.Schema(
    {
        name: String,
       employee_code: String,
        tech_stack: [String],
        experience: Number
    },
    {
        versionKey: false, 
    }
)

const trainerModel = mongoose.model('Trainer', trainerSchema);

module.exports = {trainerModel};