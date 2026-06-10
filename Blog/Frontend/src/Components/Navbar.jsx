// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../App.css';
import { useState } from 'react';
import { blogApi } from '../Utils/Api';
import { useEffect } from 'react';

const createBlog = (data) => {
  return blogApi.post('/blog/createBlog', data);
};

export const Navbar = () => {
  //   const dispatch = useDispatch();
  const [blogText, setBlogText] = useState('');
  const nav = [
    { path: '/', element: 'blog' },
    { path: '/login', element: 'login' },
    { path: '/signup', element: 'signup' },
  ];

  // blog/createBlog

  useEffect(() => {
    if (blogText.length > 0) {
      createBlog(blogText)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [blogText]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        textDecoration: 'none',
        padding: '0  1rem 1.5rem',
        margin: '1rem',
      }}
    >
      <input
        type="text"
        name="blog_create_input"
        placeholder="enter your blog"
        onChange={(e) => setBlogText(e.target.value)}
      />
      {nav &&
        nav.map((item, i) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: 'tomato',
                    }
                  : { backgroundColor: 'transparent' };
              }}
              className="navLink"
              key={i}
              to={item.path}
              end
            >
              {item.element}
            </NavLink>
          );
        })}
      {/* <button onClick={() => dispatch({ type: REMOVE_TOKEN })}>logout</button> */}
    </div>
  );
};