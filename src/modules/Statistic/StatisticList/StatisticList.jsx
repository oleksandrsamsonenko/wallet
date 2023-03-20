import StatisticItem from './StatisticItem/StatisticItem';
import styles from './statistic-list.module.scss';

const StatisticList = ({ transactions }) => {
  const filteredIncome = transactions.filter(hist => hist.type === 'INCOME');
  const filteredExpenses = transactions.filter(hist => hist.type === 'EXPENSE');
  // console.log(filteredIncome);

  const expenses = filteredExpenses.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  const income = filteredIncome.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  const fields = filteredExpenses.map(({ name, amount, color, categoryId }) => {
    return (
      <StatisticItem
        key={categoryId}
        category={name}
        color={color}
        summ={Math.abs(amount).toFixed(2)}
      />
    );
  });

  return (
    <div className={styles.list_wrapper}>
      <div className={styles.title}>
        <p>Category</p>
        <p>Summ</p>
      </div>
      <div className={styles.list_box}>
        <ul className={styles.list}>{fields}</ul>
        <div className={styles.total}>
          <p className={styles.text}>Expenses:</p>
          <span className={styles.expenses}>
            {Math.abs(expenses).toFixed(2)}
          </span>
        </div>
        <div className={styles.total}>
          <p className={styles.text}>Income:</p>
          <span className={styles.income}>{Math.abs(income).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticList;
