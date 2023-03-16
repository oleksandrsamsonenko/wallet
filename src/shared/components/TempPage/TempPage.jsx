import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import style from './TempPage.module.scss';
import { Transition } from '../Transition/Transition';

export const TempPage = () => {
  const [showIt, setShowIt] = useState(false);

  const showModal = () => {
    setShowIt(true);
  };

  const hideModal = () => {
    setShowIt(false);
  };

  return (
    <div>
      <button className={style.btn} onClick={showModal} type="button"></button>
      <Transition showIt={showIt} setShowIt={setShowIt}>
        <Modal hide={hideModal} />
      </Transition>
    </div>
  );
};
