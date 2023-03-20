import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { loadingStatus } from 'redux/AddTransaction/addTransaction-selectors';

const notify = message => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const Notifications = () => {
  const isloading = useSelector(loadingStatus);

  useMemo(() => {
    if (isloading) {
      notify(`Loading data`);
    }
  }, [isloading]);
  return <ToastContainer />;
};
