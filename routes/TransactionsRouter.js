const express = require("express");
const router = express.Router();
const TransactionsController = require("../controllers/TransactionsController");

router.get('/transactions/all', TransactionsController.getAllUserTransactions);
router.get('/transactions/recent', TransactionsController.getRecentTransactions);

module.exports = router;