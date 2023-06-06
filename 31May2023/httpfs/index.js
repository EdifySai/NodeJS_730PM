var http = require('http');
var fs = require('fs');
const server = http.createServer(function (req, res) {
    fs.readFile('package.json', function (err, data) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        if (data) {
            res.end(data.toString());
        }
    })
})
server.listen(9011, () => {
    console.log("server started");
})