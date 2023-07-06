var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index');
})

app.post("/authenticate", function (req, res) {
    var body = req.body;

    console.log("body", body);

    // take dummy username, password and  validate with the given creds

    var uname = "kiran";
    var upass = "kiran";

    if (uname == body.username && upass == body.password) {
        res.render('success', { name: uname });
    }
    else {
        res.render('failure');
    }

    // if its true, render success, else render failure
})
app.listen(9011, () => {
    console.log("server started!");
})




// Create a register page, the entered registerred details should be shown on the UI.