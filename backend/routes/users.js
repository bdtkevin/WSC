const usersRouter = require('express').Router();
const Users = require('../models/users');

usersRouter.get('/:id', async (req, res) => {
  try {
    const [[user]] = await Users.getOne(req.params.id);

    if (!user) {
      res.status(404).send(`User ${req.params.id} not found`);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).send('Error retrieving users from database');
  }
});

module.exports = usersRouter;
