const usersRouter = require('express').Router();
const Users = require('../models/users');

usersRouter.get('/', async (req, res) => {
  let results = null;

  try {
    if (req.query.id) {
      [[results]] = await Users.getOneById(req.query.id);
    } else if (req.query.email) {
      [[results]] = await Users.getOneByEmail(req.query.email);
    } else {
      [results] = await Users.getAll();
    }
    if (!results || results.length === 0) throw { code: 'ER_NO_USERS' };
    res.status(200).json(results);
  } catch (err) {
    res.status(404).send(err.code);
  }
});

module.exports = usersRouter;
