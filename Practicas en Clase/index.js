const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    fs.readFile('./index.pdf', (error, data) => {
        if (error) {
            console.log('Error: ', error);
        }
        res.write(data);
        res.end();
    });
});

server.listen(3000, "127.0.0.1", (error) => {
    
        if (error) {
            console.log('Error: ', error);
        }
    
            console.log('Server listening on port 3000');
    }
);
