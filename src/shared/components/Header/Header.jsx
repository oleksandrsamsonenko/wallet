import css from './header.module.scss';
import logo from 'assets/svg/main-logo.svg';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/Auth/auth-operations';
import exit from '../../../assets/svg/exit.svg';

const nameFromState = 'name';

const Header = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logout());
  };

  return (
    <header className={`header ${css.my__header}`}>
      <div className={css.logo__box}>
        <img className={css.logo} src={logo} alt="logo" />
        <span>Wallet</span>
      </div>
      <div className={css.box}>
        <p className={css.name}>{nameFromState}</p>
        <div className={css.stik}></div>
        <button className={css.exit} onClick={LogOut} type="button">
          <img src={exit} width="18" alt="exit" />
          <p>Exit</p>
        </button>
        {/* <Button onClick={LogOut} text="exit"></Button> */}
        {/* <a className={s.exit} href="https://www.google.com.ua/">
          <img src={exit} width="18" alt="exit" />
          <p>Exit</p>
        </a> */}
      </div>
    </header>
  );
};

export default Header;
