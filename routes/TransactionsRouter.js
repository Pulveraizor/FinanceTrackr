const express = require("express");
const router = express.Router();
const TransactionsController = require("../controllers/TransactionsController");
const BalanceController = require("../controllers/BalanceController");

router.get('/transactions/all', TransactionsController.getAllUserTransactions);
router.get('/transactions/recent', TransactionsController.getRecentTransactions);
router.get('/transactions/balance', BalanceController.getBalance);
router.post('/transactions/deposit', TransactionsController.depositTransaction);

module.exports = router;