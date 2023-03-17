import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/AuthApi';

export const addTransaction = createAsyncThunk(
  'transaction/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addTransaction(data);
      console.log(result);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getTransactionCategories = createAsyncThunk(
  'transaction/getCategories',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getTransactionCategories(data);
      console.log(result);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getAllTransaction = createAsyncThunk(
  'transaction/getAllTransactions',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getAllTransaction(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
