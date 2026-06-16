import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { BlogData } from '../App/Slicer/BlogSlice';
import { blogApi } from './../Utils/Api';
import { Buttons } from '../Components/Buttons';
import { CreateBlog } from './CreateBlog';
import { EditBlog } from './EditBlog';
export const Home = () => {
  const [showCreateForm, setShowCreateForm] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
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
    <div className="w-[80%] mx-auto flex justify-between  mb-5">
      <Buttons
        style={{
          background: '#238636',
          color: '#fff',
          flot: 'right',
        }}
        onClick={() => setShowCreateForm(true)}
        name={'create_blog'}
        type={'button'}
      />
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg relative w-[500px]">
            
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowCreateForm(false)}
            >
              ✕
            </button>

            <CreateBlog />
          </div>
        </div>
      )}
      </div>
      <div className="flex justify-center item-center w-[80%] m-auto gap-4">
        {isLoading ? (
          <h1>Loading.....</h1>
        ) : (
          data &&
          data?.map((el) => {
            return (
              <NavLink
                to={`/blog/${el._id}`}
                key={el._id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
               
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{el.title}</h1>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">{el.category}</span>
                <h4 className="text-gray-600 mb-4 line-clamp-3">{el.discription}</h4>
                <h5 className="text-yellow-500 font-bold text-lg mb-4">{el.rating}</h5>
              
              <div className="flex gap-3">
                <Buttons
                  style={{
                    background: 'tomato',
                    color: '#fff',
                    flot: 'right',
                  }}
                  name={'edit_blog'}
                  type={'button'}
                  onClick={() => setShowEditForm(true)}
                />
              {showEditForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg relative w-[500px]">
            
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowEditForm(false)}
            >
              ✕
            </button>

            <EditBlog />
          </div>
        </div>
      )}
                <Buttons
                  style={{
                    background: 'red',
                    color: '#fff',
                    flot: 'right',
                  }}
                  name={'delete_blog'}
                  type={'button'}
                />
  
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </>
  );
};