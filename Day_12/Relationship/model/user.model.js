const mongoose= require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: String,
        email:String,
        city:String,
        dob: Number,
        blood_group:String,
        address: String,
        gender: String,
        phone_number: {type:Number ,min:10},

    },
    {
        versionKey: false,
    }
)

const userModel = mongoose.model('User', userSchema);

module.exports = {userModel};