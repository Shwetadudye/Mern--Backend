// create 

const fs = require('fs');  // import c-js

//crud
//read

// fs.readFileSync('../Day_1/Cal.js', 'utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data)
// });

//create

fs.writeFileSync('./note.txt','hello');

fs.writeFile('./note.txt','\n Shweta Dudye', (err,data) =>{
    if(err){
        console.log(err)
    }
    console.log(data);
});

//update (append)

//async
fs.appendFile('./note.txt', '\n hello world',(err)=>{
    if(err){
        console.log(err)
    }
});

//delete file
//fs.rm('./note.txt');
// hw -> remove the value in file single value

