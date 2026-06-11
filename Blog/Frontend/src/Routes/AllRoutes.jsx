import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { BlogPage } from '../Pages/BlogPage';
import { PrivateRoutes } from '../Components/PrivateRoutes';
import PageNotFound from '../Pages/Page404';
import { CreateBlog } from '../Pages/CreateBlog';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>
      <Route
        path="/blog/createBlog"
        element={
          <PrivateRoutes>
            <CreateBlog />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/blog/:id"
        element={
          <PrivateRoutes>
            <BlogPage />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};