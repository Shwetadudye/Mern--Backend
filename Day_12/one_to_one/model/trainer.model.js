const mongoose= require("mongoose");
const trainerSchema= mongoose.Schema(
    {
        tech_stack : String,
        experience: Number
    },{
        versionKey: false, 
    }
)

const trainerModel = mongoose.model('trainer', trainerSchema);

module.exports = {trainerModel};