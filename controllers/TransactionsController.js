const TransactionsModel = require('../models/TransactionsModel');

module.exports = {
    getAllUserTransactions: async function (req, res, user_id) {
        const [result] = await TransactionsModel.getAllUserTransactions(req, res, req.db, 1);
        console.log('Inside the tran controller');
        if (result) {
            console.log(result);
            return result;
        } else {
            return false;
        }
    }
}