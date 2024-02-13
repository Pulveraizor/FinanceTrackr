module.exports = {
    getBalance: async function (db, user_id) {
        const q = `SELECT balance FROM users_balance WHERE user_id = ?`;
        const [result] = await db.query(q, user_id);
        if (result) {
            return result;
        } else {
            return false;
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