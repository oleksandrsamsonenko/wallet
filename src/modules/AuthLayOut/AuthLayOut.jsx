import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/Auth/auth-operations';
const AuthLayOut = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return children;
};
export default AuthLayOut;
