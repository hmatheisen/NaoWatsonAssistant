const server = require('./app');
const port = 8080;

server.listen(port, () => {
    console.log("Server is listenning on port : " + port);
});