
var http = require('http');
var fs = require('fs');

const server = http.createServer(function (req, res) {

    var readStream = fs.createReadStream('package.json');

    var data = "";

    readStream.on('data', function (chunk) {
        data = data + chunk;
    })
    readStream.on('end', function () {
        console.log(data);
        var writeStream = fs.createWriteStream('root.json');
        writeStream.write(data);
        writeStream.on('finished', function () {
            console.log("writing finished");
        })
        console.log("finished");

        var readStreamData = fs.createReadStream('root.json');
        var d = "";
        readStreamData.on('data', function (chunk) {
            d = d + chunk;
        })
        readStreamData.on('end', function () {
            console.log("final Data", d);
            res.end(d);
        })
    })
})
server.listen(9011, () => {
    console.log("server started");
})