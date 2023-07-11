var mongoose = require('mongoose');
exports.connect = () => {
    mongoose.connect(process.env.DB_URL).then(
        () => {
            console.log("Connected to DB");
        }
        ,
        error => {
            console.log("error connecting to DB", error.message)
        }
    )
}