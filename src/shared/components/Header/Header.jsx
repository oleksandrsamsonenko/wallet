import css from './header.module.scss';
import logo from 'assets/svg/main-logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import exit from '../../../assets/svg/exit.svg';
import { getUser } from 'redux/Auth/auth-selector';
import { useState, useEffect } from 'react';
import { LogOutModal } from '../LogOutModal/LogOutModal';

import { clearHistory } from 'redux/AddTransaction/addTransaction-slice';

const Header = () => {
  const name = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearHistory([]));
  }, [dispatch]);

  const [showIt, setShowIt] = useState(false);

  const showLogOutModal = () => {
    setShowIt(true);
  };

  return (
    <>
      <header className={`header ${css.my__header}`}>
        <div className={css.logo__box}>
          <img className={css.logo} src={logo} alt="logo" />
          <span>Wallet</span>
        </div>
        <div className={css.box}>
          <p className={css.name}>{name}</p>
          <div className={css.stik}></div>
          <button
            id="exit"
            className={css.exit}
            onClick={showLogOutModal}
            type="button"
          >
            <img src={exit} width="18" alt="exit" />
            <p>Exit</p>
          </button>
        </div>
      </header>
      <LogOutModal showIt={showIt} setShowIt={setShowIt} />
    </>
  );
};

export default Header;
