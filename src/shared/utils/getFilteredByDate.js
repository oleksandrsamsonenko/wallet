// Вторая функция делает проверку выбрана ли дата
const getFilteredByDate = (stmonth, styear, categories) => {
  if (stmonth !== 0 && styear !== 0) {
    const dateFilteredTrans = categories.filter(({ transactionDate }) => {
      const month = new Date(transactionDate).getMonth() + 1;
      const year = new Date(transactionDate).getFullYear();
      return month === stmonth && year === styear;
    });
    return dateFilteredTrans;
  }
  return categories;
};

export default getFilteredByDate;
