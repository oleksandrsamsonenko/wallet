import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://wallet.goit.ua',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};
export const signUp = async signData => {
  const { data } = await instance.post('/api/auth/sign-up', signData);
  setToken(data.token);
  return data;
};
export const login = async loginData => {
  const { data } = await instance.post('/api/auth/sign-in', loginData);
  setToken(data.token);
  return data;
};
export const logout = async () => {
  const { data } = await instance.delete('/api/auth/sign-out');
  setToken();
  return data;
};
export const currentUser = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const addTransaction = async transaction => {
  const { data } = await instance.post('/api/transactions', transaction);
  return data;
};

export const getAllTransaction = async () => {
  const { data } = await instance.get('/api/transactions');
  return data;
};

export const getTransactionCategories = async () => {
  const { data } = await instance.get('/api/transaction-categories');
  return data;
};

export const deleteTransaction = id => {
  return instance.delete(`/api/transactions/${id}`);
};

export const editTransaction = async ({ id, result }) => {
  const { data } = await instance.patch(`/api/transactions/${id}`, result);
  return data;
};

export default instance;
