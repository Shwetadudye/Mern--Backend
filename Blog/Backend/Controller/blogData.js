import { blogModel } from '../model/Blog.model.js';

import { userModel } from '../model/User.model.js';

// filter

// sort

// search -> find || findOne

const getBlog = async (req, res) => {
  // const filter = req.query.rating || '';
  // const sort = req.query.category || '';

  /* 
  db -> product key ->[ title, rating, category]
  */

  const blogs = await blogModel.find();

  const keySetup = blogs.reduce((acc, curr) => {
    console.log(`🚀 ~ curr:`, curr);
    console.log(Object.keys(curr));

    // return acc;
  }, []);
  console.log(`🚀 ~ keySetup:`, keySetup);

  // const search =

  const blogs = await blogModel.find(search).sort(sort);

  res.send(blogs);
};

const createBlog = async (req, res) => {
  if (req.body) {
    const authorID = await userModel.findOne({ _id: req.userCode.userID });
    const blogData = await blogModel.create({
      ...req.body,
      author: authorID._id,
    });
    res.send(blogData);
  } else {
    res.send('please enter any thing in body');
  }
};

const deleteBlog = async (req, res) => {
  const userDetail = await userModel.findOne({ _id: req.userCode.userID });

  if (req.params && res.userCode == userDetail._id) {
    const data = await blogModel.deleteOne(req.params);
    // const data = await blogModel.findByIdAndDelete(req.params);
    res.send({
      msg: `data has been deleted`,
      data,
      id: req.params,
    });
  }
  res.send('something went wrong...');
};
const updateOneBlog = () => {};
const updateManyBlog = () => {};

export { createBlog, deleteBlog, updateManyBlog, updateOneBlog, getBlog };