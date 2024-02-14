const BalanceModel = require('../models/BalanceModel');
const TransactionsModel = require('../models/TransactionsModel');

module.exports = {
    getBalance: async function (req, res) {
        try {
            const [result] = await BalanceModel.getBalance(req.db, 1);
            res.json(result.balance);
        } catch (err) {
            console.log(err);
        }
    },
    updateBalance: async function (req, res) {
       try {
        const all_deposits = await TransactionsModel.getAllDeposits(req.db);
        const all_withdrawals = await TransactionsModel.getAllWithdrawals(req.db);
        let calculate_balance = all_deposits[0].all_deposits - all_withdrawals[0].all_withdrawals;
        if (all_deposits && all_withdrawals) {
            const result = await BalanceModel.updateBalance(req.db, { user_id: 1, balance: calculate_balance });
        }
       } catch (err) {
           console.log(err);
       }
    }
}