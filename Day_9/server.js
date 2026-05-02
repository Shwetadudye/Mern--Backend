const mongoose = require("mongoose");


const main = async()=>{
    try{
        const connection = mongoose.connect('mongodb://127.0.0.1:27017/Shweta_DB');
       
        console.log("DB Connected✅");
        const userData= new mainModel(
            {
                name:'shweta',
                age: 100,
                married:false
            }
        );

       // await userData.save();

        const data = await mainModel.find({age:100});
        console.log("data",data);

        await (await connection).disconnect();
        console.log("DB disconnected❗");
    }catch(error){
        console.log("DB not connected❌");
        console.log(error);
    }
};

const mainSchema = new mongoose.Schema({
    name: String,
    age: Number,
    married: Boolean
},{
    versionKey:false
}
);

const mainModel= new mongoose.model('user',mainSchema);

main();