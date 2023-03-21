import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllTransaction,
  deleteTransactions,
} from 'redux/AddTransaction/addTransaction-operations';
import { Modal } from 'shared/components/Modal/Modal';
import svg from '../../assets/svg/edit-02.svg';
import notfound from '../../assets/background/notfound.png';
import css from '../TransactionList/TransactionList.module.scss';

const initialState = { transactionDate: new Date() };

const TransactionList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [showIt, setShowIt] = useState(false);

  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);
  const categories = useSelector(state => state.categories.categories);
  const transactions = useSelector(state => state.categories.history);
  const dateSort = transactions
    .slice()
    .sort(
      (a, b) =>
        new Date(b.transactionDate).getTime() -
        new Date(a.transactionDate).getTime()
    );
  const showModal = (
    categoryId,
    amount,
    type,
    transactionDate,
    comment,
    id
  ) => {
    const finalComment = comment ? comment : '';
    setState({
      categoryId,
      amount,
      type,
      transactionDate,
      comment: finalComment,
      id,
    });
    setShowIt(true);
  };

  if (dateSort.length !== 0) {
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
            {dateSort?.map(
              ({ id, transactionDate, type, comment, amount, categoryId }) => {
                const date = new Date(transactionDate).toLocaleDateString();
                // console.log(new Date(transactionDate).getTime());
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
                      <button
                        className={css.btnEdit}
                        onClick={() =>
                          showModal(
                            categoryId,
                            amount,
                            type,
                            transactionDate,
                            comment,
                            id
                          )
                        }
                      >
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
        <Modal
          textProp={'Edit'}
          typeProp={state.type}
          amountProp={Math.abs(state.amount)}
          dateProp={state.transactionDate}
          commentProp={state.comment}
          categoryProp={state.categoryId}
          preventEdit={true}
          id={state.id}
          showIt={showIt}
          setShowIt={setShowIt}
        />
      </div>
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

export default TransactionList;
