import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import authReducer from './Auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import addTransactionReducer from './AddTransaction/addTransaction-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  user: persistedAuthReducer,
  categories: addTransactionReducer,
});

export default rootReducer;
