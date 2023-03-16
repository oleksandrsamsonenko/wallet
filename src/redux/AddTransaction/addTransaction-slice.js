import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactionCategories,
  getAllTransaction,
} from './addTransaction-operations';

const initialState = {
  categories: [],
  history: [],
  result: {},
  loading: false,
  error: null,
};

const addTransactionSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.result = payload;
        state.error = null;
        state.isLogin = true;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getTransactionCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
        state.error = null;
        state.isLogin = true;
      })
      .addCase(getTransactionCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
        state.error = null;
        state.isLogin = true;
      })
      .addCase(getAllTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default addTransactionSlice.reducer;