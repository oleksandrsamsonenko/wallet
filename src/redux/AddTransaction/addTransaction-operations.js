import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/AuthApi';

export const addTransaction = createAsyncThunk(
  'transaction/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addTransaction(data);
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
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const deleteTransactions = createAsyncThunk(
  'transactions/deleteTransactoin',
  async (id, thunkAPI) => {
    try {
      const response = await api.deleteTransaction(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTransactions = createAsyncThunk(
  'transactions/editTransaction',
  async (data, thunkAPI) => {
    try {
      const response = await api.editTransaction(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
