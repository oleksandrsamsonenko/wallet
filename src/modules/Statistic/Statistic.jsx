import DateForm from './DateForm/DateForm';
import StatisticList from './StatisticList/StatisticList';
import { useSelector } from 'react-redux';
import Chart from './Chart/Chart';
import getTemporaryArr from 'shared/utils/getTemporaryArr';
import getFilteredByDate from 'shared/utils/getFilteredByDate';
import { Transition } from 'shared/components/Transition/Transition';
import getFinalTransaction from 'shared/utils/getFinalTransaction';
import styles from './statistic.module.scss';
import { useState } from 'react';
const Statistic = () => {
  const [stmonth, setMonth] = useState(0);
  const [styear, setYear] = useState(0);
  const [showIt, setShowIt] = useState(false);

  const categories = useSelector(state => state.categories.categories);
  const history = useSelector(state => state.categories.history);

  const filteredByDate = getFilteredByDate(stmonth, styear, history);
  const isStatisticAvailable = () => {
    if (filteredByDate.length > 0) {
      const temporaryArr = getTemporaryArr(filteredByDate, categories);
      const finalTransaction = getFinalTransaction(temporaryArr);
      return finalTransaction;
    }
    return [];
  };

  const statisticsData = isStatisticAvailable();

  const getMonth = data => {
    setMonth(data);
  };
  const getYear = data => {
    setYear(data);
  };

  return (
    <Transition type="opacity" showIt={showIt} setShowIt={setShowIt}>
      <div className={styles.statistic_container}>
        <h2 className={styles.title}>Statistic</h2>
        <div className={styles.wrapper}>
          <div className={styles.chart}>
            <Chart className={styles.chart} transactions={statisticsData} />
          </div>
          <div className={styles.info}>
            <DateForm onGetMonth={getMonth} onGetYear={getYear} />
            <StatisticList transactions={statisticsData} />
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Statistic;
