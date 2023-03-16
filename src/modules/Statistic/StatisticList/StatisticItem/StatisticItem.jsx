import styles from './statistic-item.module.scss';

const StatisticItem = ({ color, category, summ }) => {
  return (
    <li className={styles.item}>
      <p className={styles[color]}>{category}</p>
      <span className={styles.summ}>{summ}</span>
    </li>
  );
};
export default StatisticItem;
