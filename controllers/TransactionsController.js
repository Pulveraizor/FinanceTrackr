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
    }
}