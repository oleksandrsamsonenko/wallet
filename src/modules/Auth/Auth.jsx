import { Link, Outlet } from 'react-router-dom';
import css from './Auth.module.scss';
import logo from '../../assets/svg/main-logo.svg';
const Auth = () => {
  return (
    <div className={css.auth}>
      <Link to="/" className={css.logo}>
        <img src={logo} alt="logo" />
        <h2 className={css.title}> Wallet</h2>
      </Link>

      <Outlet />
    </div>
  );
};
export default Auth;
