import DateForm from './DateForm/DateForm';
import TransactionList from './TransactionList/TransactionList';
import Chart from './Chart/Chart';
import styles from './statistic.module.scss';
const Statistic = () => {
  return (
    <>
      <h2 className={styles.title}>Statistic</h2>
      <div className={styles.wrapper}>
        <Chart className={styles.chart} />
        <div className={styles.info}>
          <DateForm />
          <TransactionList />
        </div>
      </div>
    </>
  );
};

export default Statistic;
