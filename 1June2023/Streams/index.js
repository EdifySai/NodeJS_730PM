var fs = require('fs');

var writeStream = fs.createWriteStream('root.txt');
var data = "Hello how are you";

writeStream.write(data);

writeStream.on('finished', function () {
    console.log("data written");
})
