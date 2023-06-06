var fs = require('fs');

fs.unlink('new.txt', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("deleted");
    }
})