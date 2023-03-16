import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import style from './TempPage.module.scss';
import { Transition } from '../Transition/Transition';
import { useLocation } from 'react-router-dom';
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

  return (
    <div>
      <button
        className={style.btn}
        onClick={showModal}
        type="button"
        style={{ display: `${isButtonHidden}` }}
      ></button>
      <Transition showIt={showIt} setShowIt={setShowIt}>
        <Modal hide={hideModal} />
      </Transition>
    </div>
  );
};
