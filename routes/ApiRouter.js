const express = require("express");
const router = express.Router();
const TransactionsController = require("../controllers/TransactionsController");
const BalanceController = require("../controllers/BalanceController");
const GroupsController = require("../controllers/GroupsController");

router.get('/transactions/all', TransactionsController.getAllUserTransactions);
router.get('/transactions/withdrawals', TransactionsController.getAllWithdrawals);
router.get('/transactions/withdrawals/sum', TransactionsController.getAllWithdrawalsSum);
router.get('/transactions/recent', TransactionsController.getRecentTransactions);
router.get('/transactions/balance', BalanceController.getBalance);
router.post('/transactions/withdraw', TransactionsController.withdrawTransaction);
router.post('/transactions/deposit', TransactionsController.depositTransaction);

router.get('/groups/all', GroupsController.getAllGroups);
router.post('/groups/create', GroupsController.createGroup);
router.post('/groups/delete', GroupsController.deleteGroup);



module.exports = router;