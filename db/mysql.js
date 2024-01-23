var mysql = require("mysql2/promise");

const db = mysql.createPool({
  connectionLimit: 50,
  waitForConnections: true,
  queueLimit: 0,

  host: "localhost",
  user: "root",
  password: "root",
  database: "financetrackr",
});

module.exports = db;
