import styles from './statistic-item.module.scss';

const StatisticItem = ({ color, category, summ }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <p style={{ backgroundColor: color }} className={styles.cube}></p>
        <p className={styles.trans_name}>{category}</p>
      </div>
      <span className={styles.summ}>{summ}</span>
    </li>
  );
};
export default StatisticItem;
