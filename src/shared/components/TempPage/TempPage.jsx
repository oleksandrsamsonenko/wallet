import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useLocation } from 'react-router-dom';
import style from './TempPage.module.scss';
import { TransitionOnClick } from '../Transition/Transition';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export const TempPage = () => {
  const [showIt, setShowIt] = useState(false);
  const location = useLocation();
  const isOnHome = location.pathname === '/home';

  const showModal = () => {
    setShowIt(true);
  };
  const isButtonHidden = isOnHome ? 'block' : 'none';

  const hideModal = () => {
    setShowIt(false);
  };

  return createPortal(
    <div>
      <button
        className={style.btn}
        onClick={showModal}
        type="button"
        name="add"
        style={{ display: `${isButtonHidden}` }}
      ></button>
      <TransitionOnClick showIt={showIt} type={'opacity'} setShowIt={setShowIt}>
        <Modal
          OPEN={true}
          hide={hideModal}
          textProp={'Add'}
          typeProp={`EXPENSE`}
          dateProp={new Date()}
          preventEdit={false}
        />
      </TransitionOnClick>
    </div>,
    modalRoot
  );
};
