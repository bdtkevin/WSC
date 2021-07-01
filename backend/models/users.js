const { db } = require('../conf');

const getOneById = (id) => {
  const sql = `SELECT id, email, pseudo, firstname, lastname, campus, birthday, is_deleted 
              FROM users 
              WHERE id = ?`;

  return db.query(sql, [id]);
};

const getOneByEmail = (email) => {
  const sql = `SELECT id, email, pseudo, firstname, lastname, campus, birthday, is_deleted 
              FROM users 
              WHERE email = ?`;

  return db.query(sql, [email]);
};

const getAll = () => {
  const sql = `SELECT id, email, pseudo, firstname, lastname, campus, birthday, is_deleted
              FROM users`;

  return db.query(sql);
};

const create = (user) => {
  const sql = `INSERT INTO users
              SET ?`;

  return db.query(sql, user);
};

const update = (id, newAttributes) => {
  const sql = `UPDATE users
              SET ?
              WHERE id = ?`;

  return db.query(sql, [newAttributes, id]);
};

const disabled = (id) => {
  const sql = `UPDATE users 
              SET is_deleted = ? 
              WHERE id = ?`;

  return db.query(sql, [true, id]);
};

const destroy = (id) => {
  const sql = `DELETE FROM users
              WHERE id = ?`;

  return db.query(sql, [id]);
};

module.exports = {
  getOneById,
  getOneByEmail,
  getAll,
  create,
  update,
  disabled,
  destroy,
};
