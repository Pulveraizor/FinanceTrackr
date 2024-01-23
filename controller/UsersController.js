module.exports = {
    createUser: async function (db) {
        const q = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
    }
}