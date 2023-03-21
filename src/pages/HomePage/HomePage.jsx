import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import {
  getTransactionCategories,
  getAllTransaction,
} from 'redux/AddTransaction/addTransaction-operations';
import { TempPage } from 'shared/components/TempPage/TempPage';
import { Notifications } from 'shared/components/Notifications/Notifications';
import AppBar from 'modules/AppBar/AppBar';
import Header from 'shared/components/Header/Header';
import css from 'pages/HomePage/HomePage.module.scss';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCategories());
    dispatch(getAllTransaction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={`home-wrapper ${css.wrapper}`}>
        <div className="container">
          <AppBar />
          <Outlet />
          <TempPage />
        </div>
      </div>
      <Notifications />
    </>
  );
}

export default HomePage;
