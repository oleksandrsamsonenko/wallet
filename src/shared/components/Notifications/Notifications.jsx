import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Zoom } from 'react-toastify';

export const notifySuccess = message => {
  toast.success(message);
};

const notifyError = message => {
  toast.error(message);
};

const notifyInfo = message => {
  toast.info(message);
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
      notifyError(
        `Oops,something went wrong! Page reloading may solve the problem`
      );
    }
  }, [transactionStatus]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Zoom}
    />
  );
};
