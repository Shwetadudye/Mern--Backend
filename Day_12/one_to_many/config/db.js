const mongoose = require("mongoose");
require('dotenv').config();

const Connection = mongoose.connect(process.env.mongoDB);

module.exports={
    Connection
}