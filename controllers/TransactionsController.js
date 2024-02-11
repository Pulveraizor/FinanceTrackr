const TransactionsModel = require('../models/TransactionsModel');

module.exports = {
    getAllUserTransactions: async function (req, res, user_id) {
        const result = await TransactionsModel.getAllUserTransactions(req.db, 1);
        if (result) {
            return result;
        } else {
            return false;
        }
    }
}