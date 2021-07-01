const usersRouter = require('./users');
const authRouter = require('./Auth');

const setupRoutes = (app) => {
  app.use('/users', usersRouter);
  app.use('/auth', authRouter);
};

module.exports = {
  setupRoutes,
};
