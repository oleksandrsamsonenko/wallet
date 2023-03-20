import DateForm from './DateForm/DateForm';
import StatisticList from './StatisticList/StatisticList';
import { useSelector } from 'react-redux';
import Chart from './Chart/Chart';
import getTemporaryArr from 'shared/utils/getTemporaryArr';
import getFilteredByDate from 'shared/utils/getFilteredByDate';
import getFinalTransaction from 'shared/utils/getFinalTransaction';
import styles from './statistic.module.scss';
import { useState } from 'react';
const Statistic = () => {
  const [stmonth, setMonth] = useState(0);
  const [styear, setYear] = useState(0);

  const categories = useSelector(state => state.categories.categories);
  const history = useSelector(state => state.categories.history);

  const temporaryArr = getTemporaryArr(history, categories);
  const filteredByDate = getFilteredByDate(stmonth, styear, temporaryArr);
  const finalTransaction = getFinalTransaction(filteredByDate);

  const getMonth = data => {
    setMonth(data);
  };
  const getYear = data => {
    setYear(data);
  };
  return (
    <div className={styles.statistic_container}>
      <h2 className={styles.title}>Statistic</h2>
      <div className={styles.wrapper}>
        <div className={styles.chart}>
          <Chart className={styles.chart} transactions={finalTransaction} />
        </div>
        <div className={styles.info}>
          <DateForm onGetMonth={getMonth} onGetYear={getYear} />
          <StatisticList transactions={finalTransaction} />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
