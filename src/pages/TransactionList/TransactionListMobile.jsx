import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllTransaction,
  deleteTransactions,
} from 'redux/AddTransaction/addTransaction-operations';
import { Modal } from 'shared/components/Modal/Modal';
import svg from '../../assets/svg/edit-02.svg';
import notfound from '../../assets/background/notfound.png';
import css from '../TransactionList/TransactionListMobile.module.scss';

const initialState = { transactionDate: new Date() };

const TransactionListMobile = () => {
  const [state, setState] = useState(initialState);
  const [showIt, setShowIt] = useState(false);
  const dispatch = useDispatch();

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
      <ul className={css.list}>
        {dateSort?.map(
          ({ id, transactionDate, type, comment, amount, categoryId }) => {
            const date = new Date(transactionDate).toLocaleDateString();
            const transactionName = categories.find(
              category => category.id === categoryId
            );
            return (
              <li className={css.box} key={id}>
                <table className={css.table}>
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
                        <button
                          className={css.editBtn}
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
                          <span> Edit</span>
                        </button>
                      </td>
                    </tr>
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
              </li>
            );
          }
        )}
      </ul>
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
