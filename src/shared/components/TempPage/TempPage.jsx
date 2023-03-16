import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import style from './TempPage.module.scss';
import Transition from '../Transition/Transition';

export const TempPage = () => {
  const [modal, setModal] = useState(false);
  const [showIt, setShowIt] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className={style.parent}>
      <button className={style.btn} onClick={showModal} type="button"></button>
      <Transition showIt={modal} setShowIt={setShowIt}>
        <Modal hide={hideModal} />
      </Transition>
    </div>
  );
};
