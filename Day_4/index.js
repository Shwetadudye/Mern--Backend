const http = require('http');

const fs = require('fs');

const {Buffer} = require('node:buffer');

let data = fs.readFileSync('./index.html',{encoding: 'utf-8'});
const server = http.createServer((req ,res)=>{
    if(req.url ==='/notes'){
        //eventemmiter

        req.on('data', (chunk) =>{
           const buf = Buffer.from(chunk);

           fs.writeFile('note.text', buf ,(err)=>{
            if(err) {
               console.log(err);
            }
        });
        fs.readFileSync('note.text', (err , data)=>{
            if(err){
                console.log(err)
            }
            res.end(data)
        })
        })
    }
    res.end("end")
})

server.listen(7080,()=>{
    console.log('server is running ');
})