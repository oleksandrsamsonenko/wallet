import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import style from './TempPage.module.scss';

export const TempPage = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className={style.parent}>
      <button className={style.btn} onClick={showModal} type="button"></button>
      {modal && <Modal hide={hideModal} />}
    </div>
  );
};
