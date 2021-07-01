const authRouter = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const { jwt_rounds, jwt_secret } = require('../conf');
require('../passport-strategies');

authRouter.post('/signup', async (req, res) => {
  let user = req.body;

  try {
    if (!user.password) throw { code: 'ER_NO_PASS' };
    user.password = bcrypt.hashSync(user.password, jwt_rounds);
    const [postResults] = await Users.create(user);
    delete user.password;
    user.id = postResults.insertId;
    const token = jwt.sign(user, jwt_secret);
    res.status(201).json({
      user,
      token,
    });
  } catch (err) {
    switch (err.code) {
      case 'ER_NO_PASS': {
        status = 422;
        res.status(422).send('Please enter a password');
        break;
      }
      case 'ER_DUP_ENTRY': {
        res.status(409).send('This user already exists');
        break;
      }
      case 'ER_BAD_NULL_ERROR': {
        res.status(422).send('Please fill all fields');
        break;
      }
      default: {
        res.status(500).send('Error creating user from database');
      }
    }
  }
});

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = jwt.sign(req.user, jwt_secret);
  res.status(200).json({
    user: {
      ...req.user,
    },
    token,
  });
});

module.exports = authRouter;
