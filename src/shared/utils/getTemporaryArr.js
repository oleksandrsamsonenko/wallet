//Первая функция которая получает историю транзакций и модернизирует для дальнейшего использования
const getTemporaryArr = (history, categories) => {
  //Фильтрует history чтоб убрать "INCOME"
  // const filteredExpenses = history.filter(hist => hist.type === 'EXPENSE');

  //Добавляет в history необходимые поля, а именно color и name
  const temporaryArr = history.map(expenses => {
    return {
      ...expenses,
      color: categories.reduce((acc, item) => {
        if (item.id === expenses.categoryId) {
          return (acc = item.color);
        }
        return acc;
      }, ''),
      name: categories.reduce((acc, item) => {
        if (item.id === expenses.categoryId) {
          return (acc = item.name);
        }
        return acc;
      }, ''),
    };
  });
  return temporaryArr;
};

export default getTemporaryArr;
