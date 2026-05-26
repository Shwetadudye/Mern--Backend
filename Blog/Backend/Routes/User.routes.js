import express from 'express';

import { login, signup } from '../Controller/userData.js';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.send("all user's");
});

// /user/signup
userRoutes.post('/signup', signup);

userRoutes.post('/login', login);

export { userRoutes };


