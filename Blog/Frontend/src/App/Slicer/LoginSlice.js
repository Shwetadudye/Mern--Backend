import { createSlice } from '@reduxjs/toolkit';

import { cookiesFunc } from '../../Utils';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    token: cookiesFunc() || '',
    isAuth: cookiesFunc() ? true : false,
    isLoading: false,
    isError: false,
  },
  reducers: {
    LoginData: (state, action) => {},
  },
});

export const LoginSliceReducer = LoginSlice.reducer;
export const { LoginData } = LoginSlice.actions;
