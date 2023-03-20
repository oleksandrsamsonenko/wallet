// //Функция ожидает из стейта history and categories

// const filteredTransactions = (history, categories, stmonth, styear) => {
//   //Фильтрует history чтоб убрать "INCOME"
//   const filteredExpenses = history.filter(hist => hist.type === 'EXPENSE');

//   //Добавляет в history необходимые поля, а именно color и name
//   const temporaryArr = filteredExpenses.map(expenses => {
//     return {
//       ...expenses,
//       color: categories.reduce((acc, item) => {
//         if (item.id === expenses.categoryId) {
//           return (acc = item.color);
//         }
//         return acc;
//       }, ''),
//       name: categories.reduce((acc, item) => {
//         if (item.id === expenses.categoryId) {
//           return (acc = item.name);
//         }
//         return acc;
//       }, ''),
//     };
//   });

//   const isDataChose = () => {
//     if (stmonth !== 0 && styear !== 0) {
//       const dateFilteredTrans = temporaryArr.filter(({ transactionDate }) => {
//         const month = new Date(transactionDate).getMonth() + 1;
//         const year = new Date(transactionDate).getFullYear();
//         return month === stmonth && year === styear;
//       });
//       return dateFilteredTrans;
//     }
//     return temporaryArr;
//   };
//   const dateFilteredArr = isDataChose();

//   //Получаем массив без дублей
//   const filteredArr = dateFilteredArr.filter(
//     (item, index) =>
//       temporaryArr.findIndex(obj => obj.name === item.name) === index
//   );
//   //Получаем массив дублей
//   const dublicate = temporaryArr.filter(
//     (item, index) =>
//       temporaryArr.findIndex(obj => obj.name === item.name) !== index
//   );

//   //Распыляем из массива без дублей всё, а в поле amount делаем проверку,
//   //если name совпадает с name дубликата то в acc добавляем amount дубликата.
//   //если нет то возвращаем acc в которм по умолчанию лежит amount основного объекта
//   const clearTransaction = filteredArr.map(filtered => {
//     return {
//       ...filtered,
//       amount: dublicate.reduce((acc, item) => {
//         if (item.name === filtered.name) {
//           return (acc += item.amount);
//         }
//         return acc;
//       }, filtered.amount),
//     };
//   });

//   return clearTransaction;
// };

// export default filteredTransactions;
