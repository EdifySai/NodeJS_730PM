var express = require('express');
var app = express();
var db = require('./utils/db');
var userRouter = require('./routes/user.route');
var dotenv = require('dotenv');
dotenv.config();
db.connect();
app.use(express.json());
app.use("/user", userRouter);
app.listen(process.env.PORT, () => {
    console.log("server started! on port -> " + process.env.PORT);
});

// http://localhost:9091/user/add