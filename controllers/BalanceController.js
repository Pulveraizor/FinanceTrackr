const BalanceModel = require('../models/BalanceModel');

module.exports = {
    getBalance: async function (req, res) {
        try {
            const [result] = await BalanceModel.getBalance(req.db, 1);
            res.json(result.balance);
        } catch (err) {
            console.log(err);
        }
    },
    updateBalance: async function (db, data) {
        const q = `UPDATE users_balance SET balance = ? WHERE user_id = ?`;
        const [result] = await db.query(q, [data.balance, data.user_id]);
        if (result) {
            return result;
        } else {
            return false;
        }
    }
}