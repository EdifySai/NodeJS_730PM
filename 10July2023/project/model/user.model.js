var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DataSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    emailid: {
        type: String
    }
});
module.exports = mongoose.model('user', DataSchema);
