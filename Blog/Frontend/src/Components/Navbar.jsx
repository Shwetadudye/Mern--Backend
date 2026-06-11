// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../App.css';

export const Navbar = () => {
  //   const dispatch = useDispatch();
  const nav = [
    { path: '/', element: 'blog' },
    { path: '/login', element: 'login' },
    { path: '/signup', element: 'signup' },
    { path: '/blog/createBlog', element: 'createblog' },
  ];

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