var http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Hello World ! I am responding from the server");
})

server.listen(9034, function () {
    console.log("server started!");
})