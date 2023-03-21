import { Outlet, Navigate } from 'react-router-dom';
import { getAuth } from 'redux/Auth/auth-selector';
import { useSelector } from 'react-redux';
const PrivateRoute = () => {
  const { token, isLogin } = useSelector(getAuth);
  if (!isLogin && token) {
    return;
    // <p>...Loading</p>;
  }
  if (!isLogin && !token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
