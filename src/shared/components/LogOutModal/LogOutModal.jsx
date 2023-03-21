import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { logout } from 'redux/Auth/auth-operations';
import { TransitionOnClick } from '../Transition/Transition';
import style from './LogOutModal.module.scss';
// import { useRef } from 'react';

export const LogOutModal = ({ showIt, setShowIt }) => {
  const dispatch = useDispatch();
  // const firstRender = useRef(true);
  const body = document.querySelector('body');
  const exitBtn = document.querySelector('#exit');
  const addBtn = document.querySelector('#add');
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    if (showIt) {
      document.addEventListener(`keydown`, handleClose);
    }
    return () => document.removeEventListener(`keydown`, handleClose);
  });

  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    // }
    if (showIt) {
      body.classList.add('modal-open');
      exitBtn.setAttribute('disabled', true);
      addBtn.classList.add('hidden-button');
    }
    return () => {};
  }, [showIt, body, exitBtn, addBtn]);
  // console.log(`logout modal rendered`);

  const hideLogOutModal = () => {
    setShowIt(false);
    body.classList.remove('modal-open');
    exitBtn.removeAttribute('disabled');
    addBtn.classList.remove('hidden-button');
  };

  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hideLogOutModal();
    }
  };

  const LogOut = () => {
    dispatch(logout());
  };

  return createPortal(
    <TransitionOnClick showIt={showIt} type={'opacity'} setShowIt={setShowIt}>
      <div className={style.backdrop} onClick={handleClose}>
        <div className={style.modal}>
          <button
            className={style.close}
            type="button"
            onClick={hideLogOutModal}
          ></button>
          <h2 className={style.header}>Log out from Wallet?</h2>
          <button className={style.logout} type="button" onClick={LogOut}>
            LOG OUT
          </button>

          <button
            className={style.cancel}
            type="button"
            onClick={hideLogOutModal}
          >
            CANCEL
          </button>
        </div>
      </div>
    </TransitionOnClick>,
    modalRoot
  );
};
