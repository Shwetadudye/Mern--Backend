const http = require('http');
const fs = require('fs');

const PORT =  7080;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/notes'){
        res.setHeader('Content-Type' , 'text/html');
        res.end('<h1><i>Hello shweta</i></h1>');
    }else if(req.url==='/data'){
        let data = fs.readFileSync('./index.html',{encoding: 'utf-8'});
        res.setHeader('Content-Type','text/html');
        res.end(data);
    }else{
        res.end("please select any path betwwn {note , book ,help}");
    }
})

server.listen(PORT,()=>{
    console.log(`port running on ${PORT}`)
})