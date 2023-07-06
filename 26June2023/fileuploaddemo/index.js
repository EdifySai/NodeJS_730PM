var express = require('express');
var app = express();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
app.listen(9099, () => {
    console.log("server started");
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.post("/uploadProfilePicture", upload.single('mypic'), function (req, res, next) {
    console.log(req);
})