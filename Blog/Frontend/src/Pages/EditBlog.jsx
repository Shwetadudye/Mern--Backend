import React from 'react';
import { BlogForm } from '../Components/BlogForm';

export const EditBlog = () => {
  const data = [
    {
      _id: 1,
      name: 'title',
      placeholder: 'Enter your title',
      type: 'text',
    },
    {
      _id: 2,
      name: 'description',
      placeholder: 'Enter description',
      type: 'text',
    },
    {
      _id: 3,
      name: 'category',
      placeholder: 'Enter category',
      type: 'text',
    },
    {
      _id: 4,
      name: 'content',
      placeholder: 'Enter content',
      type: 'text',
    },
    {
      _id: 5,
      name: 'rating',
      placeholder: 'Enter rating',
      type: 'number',
    },
  ];

  return (
    <BlogForm
      data={data}
      name="edit Blog"
    />
  );
};