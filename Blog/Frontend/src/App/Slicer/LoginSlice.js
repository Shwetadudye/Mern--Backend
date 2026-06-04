import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    LoginData: (state, action) => {},
  },
});

export const LoginSliceReducer = LoginSlice.reducer;
export const { LoginData } = LoginSlice.actions;