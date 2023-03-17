import { Link, Outlet } from 'react-router-dom';
import css from './Auth.module.scss';
const Auth = () => {
  return (
    <div className={css.mobileWrapper}>
      <Link to="/" className={css.logo} />
      <Outlet />
    </div>
  );
};
export default Auth;
