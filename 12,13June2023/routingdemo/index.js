var express = require('express');
var app = express();
app.use(express.json());
var ItemsRouter = require('./items.route');
app.use(ItemsRouter);
app.listen(9011, () => {
    console.log("server started");
})
