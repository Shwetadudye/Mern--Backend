import express from 'express';

import {
  createBlog,
  deleteBlog,
  updateManyBlog,
  updateOneBlog,
} from '../Controller/blogData.js';

const blogRoutes = express.Router();

blogRoutes.get('/', (req, res) => {
  res.send("all blog's");
});

// /blog/createBlog

blogRoutes.post('/createBlog', createBlog);

// /blog/deleteBlog
blogRoutes.delete('/deleteBlog/:_id', deleteBlog);

// /blog/updateOneBlog
blogRoutes.patch('/updateOneBlog/:id', updateOneBlog);

// /blog/updateManyBlog
blogRoutes.put('/updateManyBlog', updateManyBlog);

export { blogRoutes };