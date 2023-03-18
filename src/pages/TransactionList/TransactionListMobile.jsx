import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllTransaction,
  deleteTransactions,
} from 'redux/AddTransaction/addTransaction-operations';
import css from '../TransactionList/TransactionListMobile.module.scss';
import svg from '../../assets/svg/edit-02.svg';
import notfound from '../../assets/background/notfound.png';

const TransactionListMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);
  const categories = useSelector(state => state.categories.categories);
  const transactions = useSelector(state => state.categories.history);
  if (transactions.length !== 0) {
    return transactions?.map(
      ({ id, transactionDate, type, comment, amount, categoryId }) => {
        const date = new Date(transactionDate).toLocaleDateString();
        const transactionName = categories.find(
          category => category.id === categoryId
        );
        return (
          <div className={css.box}>
            <table className={css.table} key={id}>
              <tbody className={css.tbody}>
                <tr className={css.part}>
                  {type === 'EXPENSE' ? (
                    <td className={css.pointFirstExpence}></td>
                  ) : (
                    <td className={css.pointFirstIncome}></td>
                  )}
                  <td className={css.head}>Date</td>
                  <td className={css.body}>{date}</td>
                </tr>
                <tr>
                  {type === 'EXPENSE' ? (
                    <td className={css.pointExpence}></td>
                  ) : (
                    <td className={css.pointIncome}></td>
                  )}
                  <td className={css.head}>Type</td>
                  {type === 'EXPENSE' ? (
                    <td className={css.body}>-</td>
                  ) : (
                    <td className={css.body}>+</td>
                  )}
                </tr>
                <tr>
                  {type === 'EXPENSE' ? (
                    <td className={css.pointExpence}></td>
                  ) : (
                    <td className={css.pointIncome}></td>
                  )}
                  <td className={css.head}>Category</td>
                  <td className={css.body}>{transactionName?.name}</td>
                </tr>
                <tr>
                  {type === 'EXPENSE' ? (
                    <td className={css.pointExpence}></td>
                  ) : (
                    <td className={css.pointIncome}></td>
                  )}
                  <td className={css.head}>Comment</td>
                  <td className={css.body}>{comment}</td>
                </tr>
                <tr>
                  {type === 'EXPENSE' ? (
                    <td className={css.pointExpence}></td>
                  ) : (
                    <td className={css.pointIncome}></td>
                  )}
                  <td className={css.head}>Sum</td>
                  {type === 'EXPENSE' ? (
                    <td className={css.expence}>
                      {Math.abs(amount).toFixed(2)}
                    </td>
                  ) : (
                    <td className={css.income}>{amount.toFixed(2)}</td>
                  )}
                </tr>
                <tr>
                  {type === 'EXPENSE' ? (
                    <td className={css.pointLastExpence}></td>
                  ) : (
                    <td className={css.pointLastIncome}></td>
                  )}
                  <td className={css.head}>
                    <button
                      className={css.btn}
                      type="button"
                      onClick={() => dispatch(deleteTransactions(id))}
                    >
                      Delete
                    </button>
                  </td>
                  <td className={css.bodyLink}>
                    <button className={css.editBtn}>
                      <img src={svg} alt="Edit" className={css.svg} />
                      <span> Edit</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    );
  } else {
    return (
      <div className={css.boxNotFound}>
        <p className={css.text}>There have been no transactions added yet.</p>
        <img src={notfound} alt="no transaction" className={css.img} />
      </div>
    );
  }
};
export default TransactionListMobile;
