const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const { db, jwt_secret, gId, gSecret } = require('./conf');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const [[user]] = await db.query(
          `SELECT * FROM users
          WHERE email = ?`,
          [email]
        );

        if (!user) return done(null, false);
        if (!bcrypt.compareSync(password, user.password))
          return done(null, false, 'Wrong password');
        delete user.password;
        return done(null, { ...user });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwt_secret,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      //strat
      callbackURL: '/auth/google/redirect',
      clientID: gId,
      clientSecret: gSecret,
    },
    () => {
      //cb
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
