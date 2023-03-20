import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/AuthApi';
export const register = createAsyncThunk(
  'user/sign-up',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const login = createAsyncThunk(
  'user/log-in',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const logout = createAsyncThunk(
  'user/log-out',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const current = createAsyncThunk(
  'auth/current-user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const result = await api.currentUser(user.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
        return false;
      }
    },
  }
);
