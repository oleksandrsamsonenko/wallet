import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//💩 Когда будет нормальный редюсер, импортируй его и передай в persistedAuthReducer, а строки 6-12 удали и забудь)
const increment = createAction('counter/increment'); // delete
const decrement = createAction('counter/decrement'); // delete

const authReducer = createReducer(0, builder => {
  builder.addCase(increment, (state, action) => state + action.payload); // delete
  builder.addCase(decrement, (state, action) => state - action.payload); // delete
}); // delete

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

export default rootReducer;
