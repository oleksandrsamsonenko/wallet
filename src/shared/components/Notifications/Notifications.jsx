import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Zoom } from 'react-toastify';

export const notifySuccess = message => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Zoom,
  });
};

const notifyError = message => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Zoom,
  });
};

const notifyInfo = message => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Zoom,
  });
};
export const Notifications = () => {
  const loginError = useSelector(state => state.user.error);
  const transactionStatus = useSelector(state => state.categories.result);

  useMemo(() => {
    if (loginError !== null) {
      notifyError(loginError);
    }
  }, [loginError]);

  useMemo(() => {
    if (transactionStatus === `add`) {
      notifySuccess(`Transaction successfully created!`);
    }
    if (transactionStatus === `deleted`) {
      notifySuccess(`Transaction successfully deleted!`);
    }
    if (transactionStatus === `edit`) {
      notifyInfo(`Transaction successfully edited!`);
    }
    if (transactionStatus === `error`) {
      notifyError(`Oops,something went wrong!`);
    }
    // if (transactionStatus === `pending`) {
    //   notifyInfo(`Wait, im working!`);
    // }
  }, [transactionStatus]);

  return (
    <ToastContainer
    // style={{ width: '50vw' }}
    />
  );
};
