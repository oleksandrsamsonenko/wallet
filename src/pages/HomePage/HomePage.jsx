import { Outlet } from 'react-router';
import AppBar from 'modules/AppBar/AppBar';
import { TempPage } from 'shared/components/TempPage/TempPage';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.home}>
      <AppBar />
      <TempPage />
      <Outlet />
    </div>
  );
}

export default HomePage;
