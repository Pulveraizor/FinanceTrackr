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
    getAllDeposits: async function (db) {
        const q = `SELECT SUM(amount) as all_deposits FROM transactions 
        WHERE user_id = 1
        AND deposit = true`;
        const [result] = await db.query(q);
        if (result) {
            return result;
        } else {
            return false;
        }
    },
    getAllWithdrawals: async function (db) {
        const q = `SELECT SUM(amount) as all_withdrawals FROM transactions 
        WHERE user_id = 1
        AND deposit = false`;
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
        VALUES (1, ?, ?, true, ?)`;

        console.log(data);
        const [result] = await db.query(q, [data.merchant_name, data.merchant_group, data.amount]);
        if (result) {
            return result.insertId;
        } else {
            return false;
        }
    },
    withdrawTransaction: async function (db, data) {
        const q = `INSERT INTO transactions 
        (user_id, merchant_name, merchant_group, deposit, amount) 
        VALUES (1, ?, ?, false, ?)`;

        console.log(data);
        const [result] = await db.query(q, [data.merchant_name, data.merchant_group, data.amount]);
        if (result) {
            return result.insertId;
        } else {
            return false;
        }
    }
}