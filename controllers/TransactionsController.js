const TransactionsModel = require('../models/TransactionsModel');
const BalanceModel = require('../models/BalanceModel');
const BalanceController = require('../controllers/BalanceController');

module.exports = {
    getAllUserTransactions: async function (req, res, user_id) {
        const result = await TransactionsModel.getAllUserTransactions(req.db, 1);
        if (result) {
            res.json(result);
        } else {
            return false;
        }
    },
    getRecentTransactions: async function (req, res, user_id) {
        const result = await TransactionsModel.getRecentTransactions(req.db, 1);
        if (result) {
            res.json(result);
        } else {
            return false;
        }
    },
    getGroups: async function (req, res) {
        try{
        const result = await TransactionsModel.getGroups(req.db);
        if (result) {
            res.json(result);
        } else {
            return false;
        }
        } catch (err) {
            console.log(err);
        }
       
    },
    depositTransaction: async function (req, res) {
        try {
            let { merchant_name, merchant_group, amount } = req.body;
            const result = await TransactionsModel.depositTransaction(req.db, {merchant_name, merchant_group, amount });
            if (result) {
                await BalanceController.updateBalance(req, res);
                res.redirect('http://localhost:3000');
                console.log('Success');
            }
        } catch (err) {
            console.log(err);
        }
    },
    withdrawTransaction: async function (req, res) {
        try {
            let { merchant_name, merchant_group, amount } = req.body;
            const result = await TransactionsModel.withdrawTransaction(req.db, {merchant_name, merchant_group, amount});
            if (result) {
                await BalanceController.updateBalance(req, res);
                res.redirect('http://localhost:3000');
                console.log('Success');
            }
        } catch (err) {
            console.log(err);
        }
    }
}