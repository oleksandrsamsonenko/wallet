import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Calendar } from '../Calendar/Calendar';
import { Transition } from '../Transition/Transition';
// import data from '../../../data/categories';
import { Formik, Form, Field } from 'formik';
import style from './Modal.module.scss';
import {
  addTransaction,
  getTransactionCategories,
  getAllTransaction,
} from 'redux/AddTransaction/addTransaction-operations';
import { useSelector } from 'react-redux';
import { categories } from 'redux/AddTransaction/addTransaction-selectors';

const initialValues = {
  amount: '',
  comment: '',
  categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
};

export const Modal = ({ hide }) => {
  const dispatch = useDispatch();

  const [showIt, setShowIt] = useState(false);
  const [type, setType] = useState('EXPENSE');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.addEventListener(`keydown`, handleClose);
    return () => document.removeEventListener(`keydown`, handleClose);
  });

  useEffect(() => {
    dispatch(getTransactionCategories());
    dispatch(getAllTransaction());
  }, [dispatch]);

  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hide();
    }
  };

  const currentStatus = type === 'EXPENSE' ? true : false;

  const handleType = () => {
    type === 'EXPENSE' ? setType('INCOME') : setType('EXPENSE');
    setShowIt(ps => !ps);
  };

  const handleSubmit = (
    { amount, comment, categoryId = 'INCOME' },
    actions
  ) => {
    const result = {
      transactionDate: date.toISOString(),
      type,
      categoryId: categoryId,
      comment: comment,
      amount: +amount,
    };
    console.log('RESULT', result);
    dispatch(addTransaction(result));

    actions.resetForm();
  };

  const handleCalendar = date => {
    setDate(date);
  };

  //   const selectionElements = data.map(element => {
  //     return (
  //       <option key={element.id} id={element.id}>
  //         {element.id}
  //       </option>
  //     );
  //   });

  const list = useSelector(categories);
  const categoriesList = list.map(item => {
    return <option key={item.id}>{item.id}</option>;
  });

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={style.modal}>
          <button className={style.close} type="button" onClick={hide}></button>
          <h2 className={style.header}>Add transaction</h2>
          <ToggleButton
            status={currentStatus}
            name="type"
            onChange={handleType}
          />
          <Transition showIt={showIt} type="opacity" setShowIt={setShowIt}>
            <Field as="select" className={style.selector} name="categoryId">
              <option value="">Select category</option>
              {/* {selectionElements} */}
              {categoriesList}
            </Field>
          </Transition>
          <div className={style.direction}>
            <Field
              className={style.amount}
              type="number"
              name="amount"
              placeholder="0.00"
            ></Field>
            <Calendar date={date} onSubmit={handleCalendar} />
          </div>
          <Field
            as="textarea"
            className={style.comment}
            type="text"
            placeholder="comment"
            name="comment"
          ></Field>
          <button className={style.add} type="submit">
            ADD
          </button>
          <button className={style.cancel} type="button" onClick={hide}>
            CANCEL
          </button>
        </Form>
      </Formik>
    </div>
  );
};
