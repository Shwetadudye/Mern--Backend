import express from 'express';

import {
  createBlog,
  deleteBlog,
  updateOneBlog,
  getBlog,
  singleBlog,
} from '../Controller/blogData.js';
import { blogModel } from '../model/Blog.model.js';

const blogRoutes = express.Router();

// single blog => /blog/id

blogRoutes.get('/:id', singleBlog);

// /blog/createBlog

blogRoutes.post('/createBlog', createBlog);

// /blog/deleteBlog
blogRoutes.delete('/deleteBlog/:_id', deleteBlog);

// /blog/updateOneBlog
blogRoutes.patch('/updateOneBlog/:id', updateOneBlog);

// /blog/updateManyBlog
// blogRoutes.put('/updateManyBlog', updateManyBlog);

// /blog/getBlog
blogRoutes.post('/getBlog', getBlog);

export { blogRoutes };