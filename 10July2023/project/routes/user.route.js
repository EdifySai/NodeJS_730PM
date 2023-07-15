var express = require('express');
var userController = require('../controller/user.controller');
var router = express.Router();
router.post('/add', userController.add);
router.put("/update", userController.update);
router.delete("/delete", userController.delete);
router.get("/list", userController.list);
router.post("/forgotPassword", userController.forgotPassword)

module.exports = router;
