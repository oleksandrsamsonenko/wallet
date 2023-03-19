import StatisticItem from './StatisticItem/StatisticItem';
import { useSelector, useDispatch } from 'react-redux';

import { addChartData } from 'redux/AddTransaction/addTransaction-slice';
import styles from './statistic-list.module.scss';
import { useEffect } from 'react';

const StatisticList = () => {
  const categories = useSelector(state => state.categories.categories);
  const history = useSelector(state => state.categories.history);
  const dispatch = useDispatch();
  const arrForChart = [{ name: '$14000', value: 0 }];

  useEffect(() => {
    if (arrForChart.length !== 0) {
      dispatch(addChartData(arrForChart));
    }
  }, [arrForChart]);

  const filteredExpenses = history.filter(hist => hist.type === 'EXPENSE');
  const filteredIncome = history.filter(hist => hist.type === 'INCOME');

  const noDublicate = filteredExpenses.filter(
    (item, index) =>
      filteredExpenses.findIndex(obj => obj.categoryId === item.categoryId) ===
      index
  );

  const categoriesList = noDublicate.map(item => item.categoryId);

  const SUPERARR = [];

  const SUPERRESULT = categoriesList.forEach(item => {
    SUPERARR.push({
      categoryId: item,
      amount: filteredExpenses.reduce((acc, element) => {
        if (element.categoryId === item) {
          return (acc += element.amount);
        }
        return acc;
      }, 0),
    });
  });

  const expenses = filteredExpenses.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  const income = filteredIncome.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  const fields = SUPERARR.map(({ categoryId, amount }) => {
    const categoryArr = categories.find(category => category.id === categoryId);
    const { color, name } = categoryArr;
    arrForChart.push({
      name,
      fill: color,
      value: Math.abs(amount),
    });

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
