import styles from './Balance.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectorHistory } from 'redux/AddTransaction/addTransaction-selectors';

const Balance = () => {
  const [currentBallance, setCurrentBalance] = useState(0);
  const history = useSelector(selectorHistory);
  useEffect(() => {
    if (history.length === 0) {
      setCurrentBalance(0);
      return;
    }
    const lastBalance = history.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

    setCurrentBalance(lastBalance);
  }, [history]);

  return (
    <div className={styles.balance}>
      <span className={styles.title}>Your balance</span>
      <p className={styles.amount}>
        <span className={styles.currency}>&#8372;</span> {currentBallance}
      </p>
    </div>
  );
};

export default Balance;
