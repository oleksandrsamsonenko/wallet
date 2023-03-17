import DateForm from './DateForm/DateForm';
import StatisticList from './StatisticList/StatisticList';
import Chart from './Chart/Chart';
import { useDispatch } from 'react-redux';

import styles from './statistic.module.scss';
const Statistic = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.statistic_container}>
      <h2 className={styles.title}>Statistic</h2>
      <div className={styles.wrapper}>
        <div className={styles.chart}>
          <Chart className={styles.chart} />
        </div>
        <div className={styles.info}>
          <DateForm />
          <StatisticList />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
