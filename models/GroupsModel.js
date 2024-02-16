module.exports = {
    getAllGroups: async function (db) {
        const q = `SELECT * FROM merchant_groups`;
        const [result] = await db.query(q);
        if (result) {
            return result;
        } else {
            return false;
        }
    },
    createGroup: async function (db, data) {
        const q = `INSERT INTO merchant_groups (name) VALUES (?)`;
        const [result] = await db.query(q, [data.name]);
        if (result) {
            return result.insertId;
        } else {
            return false;
        }
    },
    deleteGroup: async function (db, data) {
        console.log(data);
        const q = `DELETE FROM merchant_groups WHERE id = ?`;
        const [result] = await db.query(q, [data.id]);
        if (result) {
            return result;
        } else {
            return false;
        }
    }
}