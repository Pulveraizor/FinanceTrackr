const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");
const TransactionsController = require("../controllers/TransactionsController");

router.get('/transactions', TransactionsController.getAllUserTransactions);
router.post('/register', UsersController.createUser);

module.exports = router;
