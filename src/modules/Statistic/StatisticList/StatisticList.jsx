import StatisticItem from './StatisticItem/StatisticItem';

import styles from './statistic-list.module.scss';
const StatisticList = () => {
  return (
    <div className={styles.list_wrapper}>
      <div className={styles.title}>
        <p>Category</p>
        <p>Summ</p>
      </div>
      <div className={styles.list_box}>
        <ul className={styles.list}>
          <StatisticItem color="orange" category="Main expenses" summ="1700" />
          <StatisticItem color="pinc" category="Products" summ="3700" />
          <StatisticItem color="red" category="Car" summ="1000" />
          <StatisticItem color="purple" category="Self care" summ="700" />
          <StatisticItem color="cyan" category="Child care" summ="500" />
          <StatisticItem
            color="blu"
            category="Household Production"
            summ="1800"
          />
          <StatisticItem color="aqua" category="Education" summ="1200" />
          <StatisticItem color="green" category="Leisure" summ="2200" />
          <StatisticItem
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

export default StatisticList;
