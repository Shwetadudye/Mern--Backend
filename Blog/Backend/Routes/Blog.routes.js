import express from 'express';

import {
  createBlog,
  deleteBlog,
  updateManyBlog,
  updateOneBlog,
  getBlog,
} from '../Controller/blogData.js';
import { blogModel } from '../model/Blog.model.js';

const blogRoutes = express.Router();

blogRoutes.get('/', async (req, res) => {
  const blogs = await blogModel.find().populate('author');
  res.send(blogs);
});

// /blog/createBlog

blogRoutes.post('/createBlog', createBlog);

// /blog/deleteBlog
blogRoutes.delete('/deleteBlog/:_id', deleteBlog);

// /blog/updateOneBlog
blogRoutes.patch('/updateOneBlog/:id', updateOneBlog);

// /blog/updateManyBlog
blogRoutes.put('/updateManyBlog', updateManyBlog);

// /blog/getBlog
blogRoutes.post('/getBlog', getBlog);

export { blogRoutes };