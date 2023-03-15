import s from './header.module.scss';
import logo from 'assets/svg/main-logo.svg';
import exit from 'assets/svg/exit.svg';

const nameFromState = 'name';

const Header = () => {
  return (
    <header className={s.my__header}>
      <div className={s.logo__box}>
        <img className={s.logo} src={logo} alt="logo" />
        <h1>Wallet</h1>
      </div>
      <div className={s.box}>
        <p className={s.name}>{nameFromState}</p>
        <div className={s.stik}></div>
        <a className={s.exit} href="https://www.google.com.ua/">
          <img src={exit} width="18" alt="exit" />
          <p>Exit</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
