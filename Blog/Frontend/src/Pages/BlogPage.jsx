// import React from 'react';
// import { Buttons } from '../Components/Buttons';
// import { blogApi } from '../Utils/Api';
// import { useLocation } from 'react-router-dom';

// export const CreateBlog = () => {
//   const location = useLocation();
//   const [blog, setBlog] = React.useState({
//     title: '',
//     discription: '',
//     category: '',
//     content: '',
//     rating: '',
//   });

//   const handleChange = (e) => {
//     let { name, value } = e.target;

//     setBlog((prev) => {
//       if (Object.keys(prev)[Object.keys(prev).length - 1] === name) {
//         value = +value;
//       }
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };
//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       const formCheck = Object.values(blog).reduce((acc, curr) => {
//         acc = curr.toString().trim() != '' ? true : false;
//         return acc;
//       }, false);

//       /*   const formCheck = Object.values(blog).every(
//         (value) => value.toString().trim() !== '',
//  */
//       if (formCheck) {
//         let res = await blogApi.post(`${location.pathname}`, blog);
//         console.log(`🚀 ~ res:`, res.data);
//       } else {
//         alert('please fill all the fields');
//       }
//     } catch (error) {
//       console.log('error', error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'start',
//         flexDirection: 'column',
//         width: '40%',
//         margin: 'auto',
//         gap: '0.4rem',
//       }}
//     >
//       <label htmlFor="title">title</label>
//       <input
//         name="title"
//         id="title"
//         placeholder="enter your title....."
//         type="text"
//         onChange={handleChange}
//         autoComplete="true"
//       />

//       <label htmlFor="discription">discription</label>
//       <input
//         name="discription"
//         id="discription"
//         placeholder="enter your discription....."
//         type="text"
//         onChange={handleChange}
//         autoComplete="true"
//       />

//       <label htmlFor="category">category</label>
//       <input
//         name="category"
//         id="category"
//         placeholder="enter your category....."
//         type="text"
//         onChange={handleChange}
//         autoComplete="true"
//       />

//       <label htmlFor="content">content</label>
//       <input
//         name="content"
//         id="content"
//         placeholder="enter your content....."
//         type="text"
//         onChange={handleChange}
//         autoComplete="true"
//       />

//       <label htmlFor="rating">rating</label>
//       <input
//         name="rating"
//         id="rating"
//         placeholder="enter your rating....."
//         type="text"
//         onChange={handleChange}
//         autoComplete="true"
//       />
//       <Buttons
//         name="create blog"
//         style={{
//           background: 'blue',
//           color: '#ffff',
//           border: '1px solid gray',
//           padding: '0.5rem',
//           marginTop: '5px',
//         }}
//         type="submit"
//       />
//     </form>
//   );
// };