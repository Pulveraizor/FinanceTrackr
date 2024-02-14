const express = require("express");
const router = express.Router();
const TransactionsController = require("../controllers/TransactionsController");
const BalanceController = require("../controllers/BalanceController");

router.get('/transactions/all', TransactionsController.getAllUserTransactions);
router.get('/transactions/recent', TransactionsController.getRecentTransactions);
router.get('/transactions/balance', BalanceController.getBalance);
router.get('/transactions/groups', TransactionsController.getGroups);

router.post('/transactions/make', TransactionsController.makeTransaction);
router.post('/transactions/deposit', TransactionsController.depositTransaction);

module.exports = router;