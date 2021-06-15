const db = require('../conf');

const getOne = (id) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  return db.query(sql, [id]);
};

module.exports = {
  getOne,
};
