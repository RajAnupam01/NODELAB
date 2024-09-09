const http = require('node:http');
const server = http.createServer((req,res)=>{
    res.end("Hello");
});

server.listen(3000,()=>{
    console.log("Server started on localhost:3000")
})