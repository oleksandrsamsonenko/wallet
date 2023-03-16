import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import authReducer from './Auth/auth-slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  user: persistedAuthReducer,
});

export default rootReducer;
