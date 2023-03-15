import styles from "./transaction-item.module.scss";

const TransactionItem = ({ color, category, summ }) => {
  return (
    <li className={styles.item}>
      <p className={styles[color]}>{category}</p>
      <span className={styles.summ}>{summ}</span>
    </li>
  );
};
export default TransactionItem;
