//Третья финальная функция которая вернет рабочий массив для передачи его в любой компонент
const getFinalTransaction = filteredByDate => {
  //Получаем массив без дублей
  const filteredArr = filteredByDate.filter(
    (item, index) =>
      filteredByDate.findIndex(obj => obj.name === item.name) === index
  );
  //Получаем массив дублей
  const dublicate = filteredByDate.filter(
    (item, index) =>
      filteredByDate.findIndex(obj => obj.name === item.name) !== index
  );

  //Распыляем из массива без дублей всё, а в поле amount делаем проверку,
  //если name совпадает с name дубликата то в acc добавляем amount дубликата.
  //если нет то возвращаем acc в которм по умолчанию лежит amount основного объекта
  const clearTransaction = filteredArr.map(filtered => {
    return {
      ...filtered,
      amount: dublicate.reduce((acc, item) => {
        if (item.name === filtered.name) {
          return (acc += item.amount);
        }
        return acc;
      }, filtered.amount),
    };
  });

  return clearTransaction;
};
export default getFinalTransaction;
