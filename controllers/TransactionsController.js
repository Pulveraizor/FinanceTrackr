const TransactionsModel = require('../models/TransactionsModel');

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
    depositTransaction: async function (req, res) {
        try {
            let {amount} = req.body;
            const result = await TransactionsModel.depositTransaction(req.db, {amount});
            res.redirect('http://localhost:3000');
            console.log('Success');
        } catch (err) {
            console.log(err);
        }
    }
}