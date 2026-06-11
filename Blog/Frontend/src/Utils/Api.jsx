import axios from 'axios';
import { getCookiesFunc } from './Cookies';

export const blogApi = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    token: `Barer ${getCookiesFunc() ?? ''}`,
  },
});