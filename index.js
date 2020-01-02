const http = require('http');


const server = http.createServer((req,res)=>{
    let url = req.url;
    if (url === '/') {
        url = '/index.html';
    }
    console.log(url);

    let contentType = 'text/plain';

    res.end(url.slice(1))




})
server.listen(3000,()=>{
    console.log('server is listining');
});