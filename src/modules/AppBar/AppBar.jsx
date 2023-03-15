import NavBar from 'modules/NavBar/NavBar';
import Currency from 'modules/Currency/Currency';
import Balance from 'modules/Balance/Balance';
import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div className={styles.AppBar}>
      <NavBar className={styles.nav} />
      <Balance className={styles.balance} />
      <Currency />
    </div>
  );
};

export default AppBar;
