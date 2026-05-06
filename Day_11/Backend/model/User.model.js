const mongoose= require("mongoose");
const authSchema = mongoose.Schema(
    {
        name : String,
        age: Number,
        married: Boolean,
        organization: String,
        hobbies: Object
    },{
        versionKey: false,
    }
)

const userModel = mongoose.model('user', userSchema);

module.exports = {userModel};