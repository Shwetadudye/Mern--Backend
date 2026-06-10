import { createSlice } from '@reduxjs/toolkit';

import { setCookiesFunc, getCookiesFunc } from '../../Utils/Cookies';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    token: getCookiesFunc() ?? '',
    isAuth: getCookiesFunc() ? true : false,
    isLoading: false,
    isError: false,
  },
  reducers: {
    LoginData: (state, action) => {
      if (action.payload && Object.keys(action.payload).includes('token')) {
        setCookiesFunc(action.payload?.token);
        return {
          ...state,
          token: getCookiesFunc(),
          isAuth: true,
        };
      }
    },
  },
});

export const LoginSliceReducer = LoginSlice.reducer;
export const { LoginData } = LoginSlice.actions;