var express = require('express');
var app = express();
app.use(express.json());

var items = [
    {
        itemid: 101,
        name: "item1",
        assignedto: "user 1",
        date: "12/1/2023"
    },
    {
        itemid: 102,
        name: "item2",
        assignedto: "user 2",
        date: "12/2/2023"
    }
];

app.delete('/deleteItem/:id', function (req, res) {
    var id = req.params.id;
    console.log("id", id);
    items.forEach((item, i) => {
        if (item.itemid == id) {
            items.splice(i, 1);
        }
    })
    res.send(items);
})


app.put('/updateItem', function (req, res) {
    var userItem = req.body;
    console.log("userItem", userItem);
    items.forEach((item, i) => {
        console.log("item", item);
        if (item.itemid == userItem.itemid) {
            console.log("inside");
            item.name = userItem.name;
            item.assignedto = userItem.assignedto;
            item.date = userItem.date;
        }
    })
    res.send(items);
});

app.get("/item/:id", function (req, res) {

    var id = req.params.id;

    items.forEach((item, i) => {
        if (item.itemid == id) {
            res.send(item);
        }
    })
})

app.get("/items", function (req, res) {
    res.send(items);
})


app.listen(9012, () => {
    console.log("server started!");
})






