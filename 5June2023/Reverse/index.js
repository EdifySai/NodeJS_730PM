var http = require('http');
const server = http.createServer(function (req, res) {
    var string;
    function reverseString(str) {
        var splitArr = str.split("");
        string = splitArr.reverse(function (value) {
        })
        console.log(string);
    }

    reverseString("nodejs is  async , event driven, non blocking io");
    res.end(string);
})
server.listen(9099, function () {
    console.log("server started");
});