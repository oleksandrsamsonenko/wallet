import { useEffect } from 'react';
import { logout } from 'redux/Auth/auth-operations';
import { useDispatch } from 'react-redux';
import style from './LogOutModal.module.scss';

export const LogOutModal = ({ hideModal }) => {
  const dispatch = useDispatch();

  // useMemo(() => {
  //   if (!isLogin) {
  //     console.log(`out`);
  //     dispatch(clearHistory(null));
  //   }
  // }, [isLogin, dispatch]);

  useEffect(() => {
    document.addEventListener(`keydown`, handleClose);
    return () => document.removeEventListener(`keydown`, handleClose);
  });

  useEffect(() => {
    const exitBtn = document.querySelector('#exit');
    exitBtn.disabled = true;
    return () => {
      exitBtn.disabled = false;
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('modal-open');
    return () => {
      body.classList.remove('modal-open');
    };
  }, []);

  useEffect(() => {
    const addBtn = document.querySelector('#add');
    addBtn.classList.add('hidden-button');
    return () => {
      addBtn.classList.remove('hidden-button');
    };
  }, []);

  const LogOut = () => {
    dispatch(logout());
  };

  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hideModal();
    }
  };

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <div className={style.modal}>
        <button
          className={style.close}
          type="button"
          onClick={handleClose}
        ></button>
        <h2 className={style.header}>Log out from Wallet?</h2>
        <button className={style.logout} type="button" onClick={LogOut}>
          LOG OUT
        </button>

        <button className={style.cancel} type="button" onClick={handleClose}>
          CANCEL
        </button>
      </div>
    </div>
  );
};
