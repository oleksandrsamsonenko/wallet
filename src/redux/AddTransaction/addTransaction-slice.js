import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactionCategories,
  getAllTransaction,
  deleteTransactions,
} from './addTransaction-operations';
import { colorPalette } from 'shared/utils/color';

const initialState = {
  categories: [],
  history: [],
  result: {},
  loading: false,
  error: null,
  chart: [],
};

const addTransactionSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addChartData: {
      reducer: (state, { payload }) => {
        state.chart = payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = [...state.history, payload];
        state.error = null;
        state.isLogin = true;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = null;
      })
      .addCase(getTransactionCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.map((item, index) => ({
          ...item,
          color: colorPalette[index],
        }));
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
      })
      .addCase(deleteTransactions.pending, state => {
        state.loading = true;
      })

      .addCase(deleteTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.history = state.history.filter(el => el.id !== action.meta.arg);
      })
      .addCase(deleteTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addChartData } = addTransactionSlice.actions;

export default addTransactionSlice.reducer;
