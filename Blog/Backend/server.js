import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
import { Connection } from './config/db.js';
import { blogRoutes } from './Routes/Blog.routes.js';
import { userRoutes } from './Routes/User.routes.js';
import { auth } from './middleware/AuthMiddleware.js';
import { blogModel } from './model/Blog.model.js';

const server = express();

server.use(express.json(), cors(),cookieParser());

server.get('/', async (req, res) => {
  const blogs = await blogModel.find().populate('author');
  res.send(blogs);
});

// routes
server.use('/user', userRoutes);

server.use(auth);

server.use('/blog', blogRoutes);

server.listen(process.env.Port, async () => {
  try {
    await Connection();
    console.log('DB Connected successfully✅');
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
    console.log('DB Crashed! something went wrong ❌');
  } finally {
    console.log(`port is running on ${process.env.Port}`);
  }
});