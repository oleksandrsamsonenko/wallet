import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/Auth/auth-selector';
const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};
export default PublicRoute;
