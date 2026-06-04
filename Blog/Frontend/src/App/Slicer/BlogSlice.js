import { createSlice } from '@reduxjs/toolkit';

const BlogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    BlogData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const BlogSliceReducer = BlogSlice.reducer;
export const { BlogData } = BlogSlice.actions;