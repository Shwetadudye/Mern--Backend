const mongoose = require("mongoose");


const main = async()=>{
    try{
        const connection = mongoose.connect('mongodb://127.0.0.1:27017/Shweta_DB');

        const userData= new mainModel(
            {
                name:'shweta',
                age: 100,
                married:false
            },{
                versionKey: false
            },
        );

        await userData.save();

        console.log("DB connected✅");
    }catch(error){
        console.log("DB not connected❌");
        console.log(error);
    }
};

const mainSchema = new mongoose.Schema({
    name: String,
    age: Number,
    married: Boolean
});

const mainModel= new mongoose.model('user',mainSchema);

main();