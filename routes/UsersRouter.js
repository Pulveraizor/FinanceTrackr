const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

router.post('/register', UsersController.createUser);

module.exports = router;
