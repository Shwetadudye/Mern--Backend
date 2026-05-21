import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Connection } from './config/db.js';
import { userModel } from './model/user.model.js';

const server = express();

server.use(express.json(), express.text());

server.get('/', (req, res) => {
  res.send('home');
});

// signup

server.post('/signup', async (req, res) => {
  try {
    if (req.body) {
      const find_User_In_DB = await userModel.findOne(req.body);
      if (find_User_In_DB) {
        res.send('user already exist in DB please login');
      } else {
        console.log(`🚀 ~ process.env.saltRounds:`, process.env.saltRounds);
        bcrypt.genSalt(+process.env.saltRounds, async function (err, salt) {
          if (err) {
            console.log(
              `this is error which i got in generate_salt method ${err}`,
            );
          }
          bcrypt.hash(req.body.password, salt, async function (err, hash) {
            console.log(`🚀 ~ hash:`, hash);
            // Store hash in your password DB.
            if (err) {
              console.log(`this is error which i got in has method ${err}`);
            }
            req.body.password = hash;
            const userCreted = await userModel.create(req.body);
            res.send(userCreted);
          });
        });
      }
    } else {
      res.send('please enter somthing to save in DB...');
    }
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
});

// login

server.post('/login', async (req, res) => {
  try {
    if (req.body) {
      const find_User_In_DB = await userModel.find({ email: req.body.email });

      if (find_User_In_DB.length > 0) {
        const hashPass = await userModel.findOne({ email: req.body.email });
        bcrypt.compare(
          req.body.password,
          hashPass.password,
          function (err, data) {
            if (err) {
              console.log(`this is error which i got in compare method ${err}`);
            }
            if (data) {
              const token = jwt.sign(
                { course: 'backend' },
                process.env.PrivateKey,
              );
              console.log(`🚀 ~ token:`, token);
              res.send({ mag: 'user successfully logged-in', token });
            }
            res.send({ mag: 'password not correct❌❗', response: req.body });
          },
        );
      } else {
        res.send('not present please signup first!');
      }
    } else {
      res.send('please enter somthing to save in DB...');
    }
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
});

server.get('/purches', (req, res) => {
  try {
    const token = req.headers.token.split(' ')[1];
    console.log(`🚀 ~ token:`, token);

    jwt.verify(token, process.env.PrivateKey, function (err, decoded) {
      if (err) {
        console.log(`error in token verification ${err}`);
      }
      console.log(decoded);
    });

    // if (
    //   token ===
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3Vyc2UiOiJiYWNrZW5kIiwiaWF0IjoxNzc5MjUzMjYzfQ.zRXq7zBkOdeAUkxwDgt9Rqc2o8uogfA5L9mQewURfeA'
    // ) {
    //   console.log(`valid token`);
    // } else {
    //   console.log('not present please get token first via login');
    // }
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
});

server.listen(process.env.Port, async () => {
  try {
    await Connection;
    console.log(`DB connected successfully ✅`);
  } catch (err) {
    console.log(err);
    console.log(`connection failed to DB❌`);
  } finally {
    console.log(`server is running on Port ${process.env.Port}`);
  }
});

// hello -> r o v v 4 #