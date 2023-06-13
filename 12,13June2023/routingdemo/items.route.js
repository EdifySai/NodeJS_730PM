var express = require('express');

var router = express.Router();

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
router.delete('/deleteItem/:id', function (req, res) {
    var id = req.params.id;
    console.log("id", id);
    items.forEach((item, i) => {
        if (item.itemid == id) {
            items.splice(i, 1);
        }
    })
    res.send(items);
})
router.put('/updateItem', function (req, res) {
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

router.get("/item/:id", function (req, res) {

    var id = req.params.id;

    items.forEach((item, i) => {
        if (item.itemid == id) {
            res.send(item);
        }
    })
})

router.get("/items", function (req, res) {
    res.send(items);
})

module.exports = router;



