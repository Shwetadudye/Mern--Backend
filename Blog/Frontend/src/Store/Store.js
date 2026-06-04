import { configureStore } from '@reduxjs/toolkit';

import { BlogSliceReducer } from '../App/Slicer/BlogSlice';

export const blogStore = configureStore({
  reducer: { Blog: BlogSliceReducer },
});