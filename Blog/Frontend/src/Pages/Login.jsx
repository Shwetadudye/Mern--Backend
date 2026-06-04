import React from 'react';
import { Form } from '../Components/Form';

export const Login = () => {
  const data = [
    {
      _id: 1,
      name: 'name',
      placeholder: 'enter your user name',
      type: 'text',
    },
    {
      _id: 2,
      name: 'email',
      placeholder: 'enter your user email',
      type: 'email',
    },
    {
      _id: 3,
      name: 'password',
      placeholder: 'enter your user password',
      type: 'password',
    },
  ];

  return (
    <>
      <Form props={{ data, name: 'login' }} />
    </>
  );
};