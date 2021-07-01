require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  db,
  port: process.env.PORT,
  jwt_rounds: parseInt(process.env.JWT_SALTROUNDS),
  jwt_secret: process.env.JWT_SECRET,
};
