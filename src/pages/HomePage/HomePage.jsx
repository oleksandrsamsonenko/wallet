import { Outlet } from 'react-router';
import AppBar from 'modules/AppBar/AppBar';
import { TempPage } from 'shared/components/TempPage/TempPage';
import Header from 'shared/components/Header/Header';
import css from 'pages/HomePage/HomePage.module.scss';
import {
  getTransactionCategories,
  getAllTransaction,
} from 'redux/AddTransaction/addTransaction-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
          <TempPage />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default HomePage;
