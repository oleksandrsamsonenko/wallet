import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useLocation } from 'react-router-dom';
import style from './TempPage.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Notifications } from '../Notifications/Notifications';

export const TempPage = () => {
  const [showIt, setShowIt] = useState(false);
  const location = useLocation();
  const isOnHome = location.pathname === '/home';

  const showModal = () => {
    setShowIt(true);
  };
  const isButtonHidden = isOnHome ? 'block' : 'none';

  return (
    <div>
      <button
        className={style.btn}
        onClick={showModal}
        type="button"
        name="add"
        id="add"
        style={{ display: `${isButtonHidden}` }}
      ></button>
      {/* {showIt && ( */}
      <Modal
        textProp={'Add'}
        typeProp={`EXPENSE`}
        dateProp={new Date()}
        preventEdit={false}
        showIt={showIt}
        type={'opacity'}
        setShowIt={setShowIt}
      />
      {/* )} */}
      <Notifications />
    </div>
  );
};
