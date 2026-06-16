import { configureStore } from '@reduxjs/toolkit';

import { BlogSliceReducer } from '../App/Slicer/BlogSlice';
import { LoginSliceReducer } from '../App/Slicer/LoginSlice';

export const blogStore = configureStore({
  reducer: { Blog: BlogSliceReducer, auth: LoginSliceReducer },
});