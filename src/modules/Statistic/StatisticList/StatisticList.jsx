import StatisticItem from './StatisticItem/StatisticItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addChartData } from 'redux/AddTransaction/addTransaction-slice';
import styles from './statistic-list.module.scss';
import getValueChart from 'shared/utils/getValueChart';

const StatisticList = () => {
  const categories = useSelector(state => state.categories.categories);
  const history = useSelector(state => state.categories.history);
  const dispatch = useDispatch();
  const SUPERARR = [];
  const valueChart = getValueChart(categories, history);

  useEffect(() => {
    dispatch(addChartData(valueChart));
  }, [dispatch, valueChart]);


  const filteredExpenses = history.filter(hist => hist.type === 'EXPENSE');

  const filteredIncome = history.filter(hist => hist.type === 'INCOME');

  // const getDate = () => {
  //   const transactionsDate = history.map(item => {
  //     const month = new Date(item.transactionDate).getMonth() + 1;
  //     const year = new Date(item.transactionDate).getFullYear();
  //     return {};
  //   });
  // };
  // getDate();

  const noDublicate = filteredExpenses.filter(
    (item, index) =>
      filteredExpenses.findIndex(obj => obj.categoryId === item.categoryId) ===
      index
  );

  const categoriesList = noDublicate.map(item => item.categoryId);

  categoriesList.forEach(item => {
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

  // arrForChart = [
  //   ...initialValue,
  //   ...SUPERARR.map(({ categoryId, amount }) => {
  //     const categoryArr = categories.find(
  //       category => category.id === categoryId
  //     );
  //     const { color, name } = categoryArr;
  //     return {
  //       name,
  //       fill: color,
  //       value: Math.abs(amount),
  //     };
  //   }),
  // ];

  const fields = SUPERARR.map(({ categoryId, amount }) => {
    const categoryArr = categories.find(category => category.id === categoryId);
    const { color, name } = categoryArr;

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
