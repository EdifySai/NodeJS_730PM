var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'pug');
app.get('/', function(req,res) {
    res.render('index');
})

app.post("/authenticate", function(req,res) {
     var body =  req.body;

     console.log("body", body); 

     // take dummy username, password and  validate with the given creds

     // if its true, render success, else render failure
})
app.listen(9011, () =>{
    console.log("server started!");
})
