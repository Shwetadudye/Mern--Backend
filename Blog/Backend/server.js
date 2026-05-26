import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import { Connection } from './config/db.js';
import { blogRoutes } from './Routes/Blog.routes.js';
import { userRoutes } from './Routes/User.routes.js';

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('home');
});

// routes
server.use('/user', userRoutes);
server.use('/blog', blogRoutes);

console.log(`🚀 ~ process.env.Port:`, process.env.Port);
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