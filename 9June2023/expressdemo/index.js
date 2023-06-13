
var express = require('express');

var app = express();

app.use(express.json());


var products = [
    {
        name: "product 1"
    },
    {
        name: "product 2"
    },
    {
        name: "product 3"
    }
];

app.get('/products', function (req, res) {
    res.send(products);
})
app.post("/addProduct", function (req, res) {
    var product = req.body;
    products.push(product);
    res.send(products);
})


app.listen(9011, () => {
    console.log("server started!");
})