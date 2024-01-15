import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = {
  auth: authReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
