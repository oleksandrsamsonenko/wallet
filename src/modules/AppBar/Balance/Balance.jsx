import styles from './Balance.module.scss';

const Balance = () => {
  return (
    <div className={styles.balance}>
      <span className={styles.title}>Your balance</span>
      <p className={styles.amount}>
        <span className={styles.currency}>&#8372;</span> 24 000.00
      </p>
    </div>
  );
};

export default Balance;
