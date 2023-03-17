import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from '../TransactionList/TransactionList.module.scss';
import svg from '../../assets/svg/edit-02.svg';
import {
  getAllTransaction,
  deleteTransactions,
} from 'redux/AddTransaction/addTransaction-operations';

const TransactionList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);
  const categories = useSelector(state => state.categories.categories);
  const transactions = useSelector(state => state.categories.history);
  return (
    <div className={css.box}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {transactions?.map(
            ({ id, transactionDate, type, comment, amount, categoryId }) => {
              const date = new Date(transactionDate).toLocaleDateString();
              const transactionName = categories.find(
                category => category.id === categoryId
              );
              return (
                <tr key={id}>
                  <td>{date}</td>
                  {type === 'EXPENSE' ? <td>-</td> : <td>+</td>}
                  <td>{transactionName?.name}</td>
                  <td className={css.tdComment}>{comment}</td>
                  {type === 'EXPENSE' ? (
                    <td className={css.expence}>
                      {Math.abs(amount).toFixed(2)}
                    </td>
                  ) : (
                    <td className={css.income}>{amount.toFixed(2)}</td>
                  )}
                  <td>
                    <button className={css.btnEdit}>
                      <img src={svg} alt="Edit" className={css.svg} />
                    </button>
                    <button
                      className={css.btn}
                      type="button"
                      onClick={() => dispatch(deleteTransactions(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
