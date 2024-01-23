module.exports = {
    createUser: async function (db, data) {
        const q = `INSERT INTO users (username, password) VALUES (?, ?)`;
        const [result] = await db.query(q, [data.username, data.password]);
        if (result) {
            return result.insertId;
          } else {
            return false;
          }
    },
    getUserById: async function (db) {
        const q = `SELECT * FROM users WHERE id = ?`;

    }
}