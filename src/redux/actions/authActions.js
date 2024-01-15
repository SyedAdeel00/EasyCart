import { LOGIN_SUCCESS } from '../types';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
