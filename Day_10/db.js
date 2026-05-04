const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.MongoDB_URL);

// const Connections = mongoose.connect("mongodb://localhost:27017/Shweta_DB");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    married: Boolean,
    organization: String,
    hobbies:Object
},{
    versionKey:false
}
);

const userModel= new mongoose.model('user',userSchema);

module.exports = {connection, userModel}