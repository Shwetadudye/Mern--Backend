import React from 'react';

import { useLocation } from 'react-router-dom';
import { blogApi } from '../Utils/Api';
import { LoginData } from '../App/Slicer/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Form = ({ props }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const value = useSelector((store) => store.auth);
  console.log(`🚀 ~ value:`, value);

  const [form, setForm] = React.useState(
    props.data?.reduce((acc, curr) => {
      acc[curr.name] = '';
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formCheck = Object.values(form).reduce((acc, curr) => {
        acc = curr.length > 0 ? true : false;
        return acc;
      }, false);

      if (formCheck) {
        let res = await blogApi.post(`/user${location.pathname}`, form);
        console.log(`🚀 ~ res:`, res.data);
        dispatch(LoginData(res.data));
        // if (Object.keys(res.data).includes('token')) {
        // }
      } else {
        alert('please fill all the fields');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.data?.map((el) => {
        return (
          <div key={el._id}>
            <label htmlFor={el.name}>{el.name}</label> <br />
            <br />
            <input
              id={el.name}
              name={el.name}
              type={el.type}
              placeholder={el.placeholder}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <br />
          </div>
        );
      })}
      <button type="submit">{props.name}</button>
    </form>
  );
};

// Form.propTypes = {
//   email: PropTypes.string,
//   pass: PropTypes.string,
//   phone: PropTypes.number,
// };

// Form.defaultPropTypes = {
//   email: 'not given yet',
//   pass: 'default',
//   phone: 'unset-0000',
// };