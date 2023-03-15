import DateForm from "./DateForm/DateForm";
import TransactionList from "./TransactionList/TransactionList";
import styles from "./statistic.module.scss";
const Statistic = () => {
  return (
    <div className={styles.wrapper}>
      <DateForm />
      <TransactionList />
    </div>
  );
};

export default Statistic;
