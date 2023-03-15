import TransactionItem from "./TransactionItem/TransactionItem";
import styles from "./transaction-list.module.scss";
const TransactionList = () => {
  return (
    <div className={styles.list_wrapper}>
      <div className={styles.title}>
        <p>Category</p>
        <p>Summ</p>
      </div>
      <div className={styles.list_box}>
        <ul className={styles.list}>
          <TransactionItem
            color="orange"
            category="Main expenses"
            summ="8700"
          />
          <TransactionItem color="pinc" category="Products" summ="3700" />
          <TransactionItem color="red" category="Car" summ="1000" />
          <TransactionItem color="purple" category="Self care" summ="700" />
          <TransactionItem color="cyan" category="Child care" summ="500" />
          <TransactionItem
            color="blu"
            category="Household Production"
            summ="1800"
          />
          <TransactionItem color="aqua" category="Education" summ="1200" />
          <TransactionItem color="green" category="Leisure" summ="2200" />
          <TransactionItem
            color="forestgreen"
            category="Other expenses"
            summ="300"
          />
        </ul>
        <div className={styles.total}>
          <p className={styles.text}>Expenses:</p>
          <span className={styles.expenses}>22500</span>
        </div>
        <div className={styles.total}>
          <p className={styles.text}>Income:</p>
          <span className={styles.income}>27300</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
