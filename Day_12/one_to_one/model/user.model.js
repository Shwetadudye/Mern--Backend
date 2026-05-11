const mongoose= require("mongoose");
const userSchema = mongoose.Schema(
    {
        name: String,
        dob : Number,
        gender: Boolean,
        phone: Number,
        address : String

    },{
        versionKey: false,
    }
)

const userModel = mongoose.model('user', userSchema);

module.exports = {userModel};