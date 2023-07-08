var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.json());

var response = mongoose.connect("mongodb://localhost/ecommerce");

response.then(res => {
    console.log("connected")
},
    err => {
        console.log(err);
    })

//model 

var Schema = mongoose.Schema;

var ItemSchema = new Schema({

    itemId: {
        type: Number
    },
    name: {
        type: String
    },
    assignee: {
        type: String
    }
});

var ModelRef = mongoose.model('item', ItemSchema);

app.post('/addItem', function (req, res) {
    var body = req.body;
    console.log("body", body);
    // var item = new ItemSchema(body);
    // item.save();
    var item = new ModelRef(body);
    item.save();
    res.send("item added");

})

app.delete('/deleteItem/:id', function (req, res) {
    var ItemId = req.params.id;

    ModelRef.findOneAndRemove({ itemId: ItemId }).then(
        response => {
            console.log(response);
            res.send("item removed");
        },
        error => {
            res.send(error);
        }
    )

})
app.put('/updateItem', function (req, res) {
    var body = req.body;
    ModelRef.findOneAndUpdate({ itemId: body.itemId }, body).then(
        response => {
            console.log(response);
            res.send(response);
        },
        error => {
            console.log(error);
            res.send(error);
        }
    )
});

app.get("/item/:id", function (req, res) {
    var ItemId = req.params.id;
    ModelRef.findOne({ itemId: ItemId }).then(
        response => {
            console.log(response);
            res.send(response);
        },
        error => {
            console.log(error);
        }
    )

});

app.get("/items", function (req, res) {
    ModelRef.find({}).then(
        function (response) {
            console.log(response);
            res.send(response);
        }
        ,
        function (error) {
            console.log(error);
            res.send(error);
        }
    )
})
app.listen(9012, () => {
    console.log("server started!");
})






