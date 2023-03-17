import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getAllTransaction,
  deleteTransactions,
} from 'redux/AddTransaction/addTransaction-operations';
import css from '../TransactionList/TransactionListMobile.module.scss';
import svg from '../../assets/svg/edit-02.svg';

const TransactionListMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);
  const categories = useSelector(state => state.categories.categories);
  const transactions = useSelector(state => state.categories.history);
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
                <td className={css.pointFirst}></td>
                <td className={css.head}>Date</td>
                <td className={css.body}>{date}</td>
              </tr>
              <tr>
                <td className={css.point}></td>
                <td className={css.head}>Type</td>
                {type === 'EXPENSE' ? (
                  <td className={css.body}>-</td>
                ) : (
                  <td className={css.body}>+</td>
                )}
              </tr>
              <tr>
                <td className={css.point}></td>
                <td className={css.head}>Category</td>
                <td className={css.body}>{transactionName?.name}</td>
              </tr>
              <tr>
                <td className={css.point}></td>
                <td className={css.head}>Comment</td>
                <td className={css.body}>{comment}</td>
              </tr>
              <tr>
                <td className={css.point}></td>
                <td className={css.head}>Sum</td>
                {type === 'EXPENSE' ? (
                  <td className={css.expence}>{Math.abs(amount).toFixed(2)}</td>
                ) : (
                  <td className={css.income}>{amount.toFixed(2)}</td>
                )}
              </tr>
              <tr>
                <td className={css.pointLast}></td>
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
};
export default TransactionListMobile;
