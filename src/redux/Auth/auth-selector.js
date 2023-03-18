export const isUserLogin = state => state.user.isLogin;
export const getAuth = ({ user }) => {
  const { isLogin, token } = user;
  return { isLogin, token };
};
export const getUser = state => {
  return state.user.user.username;
};
