import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    title: String,
    discription: String,
    category: String,
    rating: Number,
  },
  {
    versionKey: false,
  },
);

export const blogModel = mongoose.model('Blog', blogSchema);