const express= require('express');
const cors= require('cors');

const PORT= 7090;
const server = express();

server.use(
    cors({
        origin:['http://127.0.0.1:5500','*'],
        methods: 'GET',
        //optionSucessStatus:201;
    })
)

server.get('/', (req,res)=>{
    res.send('hello')
})

//start server port

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})