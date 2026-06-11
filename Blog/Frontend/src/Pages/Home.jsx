import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { BlogData } from '../App/Slicer/BlogSlice';
import { blogApi } from './../Utils/Api';
import { Buttons } from '../Components/Buttons';

export const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.Blog);

  React.useEffect(() => {
    try {
      blogApi
        .get('/')
        .then((res) => dispatch(BlogData(res.data)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(`🚀 ~ error:`, error);
    }
  }, []);

  return (
    <>
      <Buttons
        style={{
          background: '#238636',
          color: '#fff',
          flot: 'right',
        }}
        name={'create_blog'}
        type={'button'}
      />
      <div className="flex justify-center item-center w-[80%] m-auto">
        {isLoading ? (
          <h1>Loading.....</h1>
        ) : (
          data &&
          data?.map((el) => {
            return (
              <NavLink
                to={`/blog/${el._id}`}
                key={el._id}
                style={{ border: '2px solid red' }}
              >
                <h1>{el.title}</h1>
                <h3>{el.category}</h3>
                <h4>{el.discription}</h4>
                <h5>{el.rate}</h5>
                <Buttons
                  style={{
                    background: 'red',
                    color: '#fff',
                    flot: 'right',
                  }}
                  name={'delete_blog'}
                  type={'button'}
                />
                <Buttons
                  style={{
                    background: 'tomato',
                    color: '#fff',
                    flot: 'right',
                  }}
                  name={'edit_blog'}
                  type={'button'}
                />
              </NavLink>
            );
          })
        )}
      </div>
    </>
  );
};