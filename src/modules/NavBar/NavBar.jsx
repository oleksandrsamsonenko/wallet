import { Link, Outlet } from 'react-router-dom';
import css from './NavBar.module.scss';
import logo from '../../assets/svg/main-logo.svg';
const NavBar = () => {
  return (
    <div className="container">
      <div className={css.auth}>
        <Link to="/" className={css.logo}>
          <img src={logo} alt="logo" />
          <h2 className={css.title}> Wallet</h2>
        </Link>
        <Outlet />
      </div>
    </div>
  );
};
export default NavBar;
