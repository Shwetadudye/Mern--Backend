const express = require('express')

const fs = require('fs');

let PORT = 7000;
let app = express();
// middleware [json, text]

app.use(express.json());
app.use(express.text());

// read 
app.get('/', (req,res)=>{
   res.send('hello');
});

//create

app.post('/create_note',(req,res)=>{
    fs.writeFile('./data.json', JSON.stringify(req.body),(err)=>{
        if(err){
            console.log(err);
        }
    });
    res.send(
        `done the file has been create by this value -> ${JSON.stringify(res.body)}`,
    );
});

// update
app.put('/update_note',(req, res)=>{
    fs.writeFile('./data.json' ,JSON.stringify(req.body),(err)=>{
        if(err){
            console.log(err)
        }
    });
    res.send("update")
})

//delete 
app.delete('/delete_note', (req,res)=>{
    fs.writeFile('./data.json',(err)=>{
        if(err){
            console.log(err)
        }
    });
    res.end("delete")
})

app.listen(PORT, '127.0.0.1',()=>{
    console.log(`port is running on ${PORT}`);
});