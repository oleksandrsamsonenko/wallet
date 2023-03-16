import { Link, Outlet } from 'react-router-dom';
import css from './Auth.module.scss';

const Auth = () => {
  return (
    <div className={`auth__box ${css.auth}`}>
      <Link to="/" className={css.logo} />
      <Outlet />
    </div>
  );
};
export default Auth;
