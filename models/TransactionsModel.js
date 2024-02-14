module.exports = {
    getAllUserTransactions: async function (db, user_id) {
        const q = `SELECT * FROM transactions 
        WHERE user_id = ?
        ORDER BY created_at DESC`;
        const [result] = await db.query(q, user_id);
        if (result) {
            return result;
        } else {
            return false;
        }
    },
    getRecentTransactions: async function (db, user_id) {
        const q = `SELECT * FROM transactions
        WHERE user_id = ?
        ORDER BY created_at DESC 
        LIMIT 6`;
        const [result] = await db.query(q, user_id);
        if (result) {
            return result;
        } else {
            return false;
        }
    },
    getGroups: async function (db) {
        const q = `SELECT * FROM merchant_groups`;
        const [result] = await db.query(q);
        if (result) {
            return result;
        } else {
            return false;
        }
    },
    depositTransaction: async function (db, data) {
        const q = `INSERT INTO transactions 
        (user_id, merchant_name, merchant_group, deposit, amount) 
        VALUES (1, 'User Top Up', 'Top up', true, ?)`;

        console.log(data);
        const [result] = await db.query(q, data.amount);
        if (result) {
            return result.insertId;
        } else {
            return false;
        }
    }
}