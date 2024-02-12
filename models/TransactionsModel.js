module.exports = {
    getAllUserTransactions: async function (db, user_id) {
        const q = `SELECT * FROM transactions WHERE user_id = ?`;
        const [result] = await db.query(q, user_id);
        if (result) {
            return result;
        } else {
            return false;
        }
    },
    getRecentTransactions: async function (db, user_id) {
        const q = `SELECT * FROM transactions WHERE user_id = ?
        LIMIT 6`;
        const [result] = await db.query(q, user_id);
        if (result) {
            return result;
        } else {
            return false;
        }
    }
}