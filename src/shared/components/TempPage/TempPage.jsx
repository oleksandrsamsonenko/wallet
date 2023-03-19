import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { createPortal } from 'react-dom';
import style from './TempPage.module.scss';
import { TransitionOnClick } from '../Transition/Transition';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux';
// import { useMemo } from 'react';
// import { loadingStatus } from 'redux/AddTransaction/addTransaction-selectors';
import { useLocation } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

// const notify = () => {
//   toast.success(' Wow so easy!', {
//     position: 'top-center',
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: 'colored',
//   });
// };

export const TempPage = () => {
  const [showIt, setShowIt] = useState(false);
  const location = useLocation();
  const isOnHome = location.pathname === '/home';

  // const isloading = useSelector(loadingStatus);

  // useMemo(() => {
  //   if (isloading) {
  //     return notify();
  //   }
  // }, [isloading]);

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
      {/* <ToastContainer /> */}
    </div>,
    modalRoot
  );
};
