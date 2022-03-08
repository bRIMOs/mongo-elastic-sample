const http = require('http');
const app = require('./app');
const dotenv  = require('dotenv');

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 4005;


const server = http.createServer(app);

server.listen(port , (e) => {
    console.log("server listenening port => " + port);
} );