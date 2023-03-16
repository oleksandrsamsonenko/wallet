import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { createPortal } from 'react-dom';
import style from './TempPage.module.scss';
import { TransitionOnClick } from '../Transition/Transition';

const modalRoot = document.querySelector('#modal-root');

export const TempPage = () => {
  const [showIt, setShowIt] = useState(false);

  const showModal = () => {
    setShowIt(true);
  };

  const hideModal = () => {
    setShowIt(false);
  };

  return createPortal(
    <div className={style.parent}>
      <button className={style.btn} onClick={showModal} type="button"></button>
      <TransitionOnClick showIt={showIt} type={`opacity`}>
        <Modal hide={hideModal} />
      </TransitionOnClick>
    </div>,
    modalRoot
  );
};
