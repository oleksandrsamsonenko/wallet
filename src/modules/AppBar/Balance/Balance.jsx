import styles from './Balance.module.scss';

const Balance = () => {
  return (
    <div className={styles.balance}>
      <h2 className={styles.title}>Your balance</h2>
      <p className={styles.amount}>₴ 24 000.00</p>
    </div>
  );
};

export default Balance;
