import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTransactionCategories } from 'shared/api/AuthApi';
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
            ({ id, transactionDate, type, comment, amount }) => {
              const date = new Date(transactionDate).toLocaleDateString();
              return (
                <tr key={id}>
                  <td>{date}</td>
                  {type === 'EXPENSE' ? <td>-</td> : <td>+</td>}
                  <td>Other</td>
                  <td className={css.tdComment}>{comment}</td>
                  {type === 'EXPENSE' ? (
                    <td className={css.expence}>{amount}</td>
                  ) : (
                    <td className={css.income}>{amount}</td>
                  )}
                  <td>
                    <NavLink>
                      <img src={svg} alt="Edit" className={css.svg} />
                    </NavLink>
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
