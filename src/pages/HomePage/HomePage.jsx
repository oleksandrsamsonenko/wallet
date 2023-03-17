import { Outlet } from 'react-router';
import AppBar from 'modules/AppBar/AppBar';
import { TempPage } from 'shared/components/TempPage/TempPage';
import Header from 'shared/components/Header/Header';
import styles from './HomePage.module.scss';
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
    <div className={styles.home}>
      <Header />
      <AppBar />
      <TempPage />
      <Outlet />
    </div>
  );
}

export default HomePage;
