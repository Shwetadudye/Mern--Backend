import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import { userModel } from '../model/User.model.js';

export const signup = async (req, res) => {
  try {
    if (req.body) {
      const find_User_In_DB = await userModel.findOne(req.body);
      if (find_User_In_DB) {
        res.send('user already exist in DB please login');
      } else {
        bcrypt.genSalt(+process.env.saltRounds, async function (err, salt) {
          if (err) {
            res.send(
              `this is error which i got in generate_salt method ${err}`,
            );
          }
          bcrypt.hash(req.body.password, salt, async function (err, hash) {
            console.log(`🚀 ~ hash:`, hash);
            // Store hash in your password DB.
            if (err) {
              res.send(`this is error which i got in has method ${err}`);
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
    res.send('something went wrong...');
  }
};

export const login = async (req, res) => {
  try {
    if (req.body) {
      const userData = await userModel.findOne({ email: req.body.email });
      console.log(`🚀 ~ userData:`, userData._id);

      if (userData) {
        bcrypt.compare(
          req.body.password,
          userData.password,
          async function (err, data) {
            if (err) {
              res.send(err);
            }
            if (data) {
              const token = await jwt.sign(
                { userDetails: userData._id },
                process.env.PrivateKey,
              );
              res.send({ msg: 'user successfully logged-in', token });
            }
            res.send({ msg: 'password not correct❌❗', response: req.body });
          },
        );
        // res.send(`🚀 ~ userData:`, userData);
      } else {
        res.send(`user not present in DB, please signup first...`);
      }
    } else {
      res.send(`please enter somthing in body`);
    }
  } catch (error) {
    res.send(`🚀 ~ error:`, error);
  }
};