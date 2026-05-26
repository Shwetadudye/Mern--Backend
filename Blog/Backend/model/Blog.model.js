import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    title: String,
    discription: String,
    category: String,
    content: String,
    rating: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  },
);

export const blogModel = mongoose.model('Blog', blogSchema);