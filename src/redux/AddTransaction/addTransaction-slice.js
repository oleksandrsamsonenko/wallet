import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactionCategories,
  getAllTransaction,
  deleteTransactions,
  editTransactions,
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
    clearHistory: {
      reducer: (state, { payload }) => {
        state.history = payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTransaction.pending, state => {
        state.loading = true;
        state.error = null;
        state.result = 'pending';
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.history = [...state.history, action.payload];
        state.error = null;
        state.result = `add`;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = 'error';
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
      })
      .addCase(getAllTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteTransactions.pending, state => {
        state.loading = true;
        state.result = 'pending';
      })
      .addCase(deleteTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.history = state.history.filter(el => el.id !== action.meta.arg);
        state.result = 'deleted';
      })
      .addCase(deleteTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.result = 'error';
      })
      .addCase(editTransactions.pending, state => {
        state.loading = true;
        state.result = 'pending';
      })
      .addCase(editTransactions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.history = state.history.map(item =>
          item.id === payload.id ? payload : item
        );
        state.result = 'edit';
      })
      .addCase(editTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.result = 'error';
      });
  },
});

export const { addChartData, clearHistory } = addTransactionSlice.actions;

export default addTransactionSlice.reducer;
