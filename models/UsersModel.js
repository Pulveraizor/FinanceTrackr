module.exports = {
    createUser: async function (db, data) {
      console.log('Inside the model: ');
      console.log(data);
        const q = `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`;
        const [result] = await db.query(q, [data.email, data.username, data.password]);
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