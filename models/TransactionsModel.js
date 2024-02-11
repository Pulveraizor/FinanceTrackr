module.exports = {
    getAllUserTransactions: async function (db, user_id) {
        const q = `SELECT * FROM transactions WHERE user_id = ?`;
        const [result] = await db.query(q, [user_id]);
        console.log('Inside the tran model: ' + result);
        if (result) {
            return result;
        } else {
            return false;
        }
    }
}