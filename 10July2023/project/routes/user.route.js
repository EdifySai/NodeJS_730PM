var express = require('express');
var userController = require('../controller/user.controller');
var router = express.Router();
router.post('/add', userController.add);
module.exports = router;
