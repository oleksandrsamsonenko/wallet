import getDataFromLocalStorage from './localStorage';

const lastBalance = getDataFromLocalStorage('lastBalance', 0);

const getValueChart = (categories, history) => {
  const SUPERARR = [];
  const arrForChart = [{ name: lastBalance.toString(), value: 0 }];

  const filteredExpenses = history.filter(hist => hist.type === 'EXPENSE');

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
  // eslint-disable-next-line
  SUPERARR.map(({ categoryId, amount }) => {
    const categoryArr = categories.find(category => category.id === categoryId);
    const { color, name } = categoryArr;
    arrForChart.push({
      name,
      fill: color,
      value: Math.abs(amount),
    });
  });

  return arrForChart;
};

export default getValueChart;
