// Вторая функция делает проверку выбрана ли дата
const getFilteredByDate = (stmonth, styear, temporaryArr) => {
  if (stmonth !== 0 && styear !== 0) {
    const dateFilteredTrans = temporaryArr.filter(({ transactionDate }) => {
      const month = new Date(transactionDate).getMonth() + 1;
      const year = new Date(transactionDate).getFullYear();
      return month === stmonth && year === styear;
    });
    return dateFilteredTrans;
  }
  return temporaryArr;
};

export default getFilteredByDate;
