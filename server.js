const http = require('http');
const port = 8000;
const hostname = '127.0.0.1';


//Skapa vår http-server

const server = http.createServer((req, res) => {
    //sätta vår response-header med http-status och content-type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //sätta vår body i vår response till 'hello world'
    res.end('Hello World!');
});

//säger åt servern att starta och när den lyssnar så printar den detta i konsollen
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
