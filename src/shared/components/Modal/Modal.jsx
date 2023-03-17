import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Calendar } from '../Calendar/Calendar';
import { Transition } from '../Transition/Transition';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Modal.module.scss';
import { addTransaction } from 'redux/AddTransaction/addTransaction-operations';
import { useSelector } from 'react-redux';
import { categories } from 'redux/AddTransaction/addTransaction-selectors';
import * as Yup from 'yup';

export const Modal = ({ hide }) => {
  const [showIt, setShowIt] = useState(false);
  const [type, setType] = useState('EXPENSE');
  const [date, setDate] = useState(new Date());

  const incomeCategory = useSelector(categories);
  const list = useSelector(categories);

  const incomeId = incomeCategory.find(item => item.type === 'INCOME').id;
  const validationList =
    type === 'EXPENSE'
      ? list.filter(item => item.type === 'EXPENSE').map(item => item.id)
      : [incomeId];

  const initialValues = {
    amount: '',
    comment: '',
    categoryId: incomeId,
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .positive('Must be a positive number')
      .required('Must be a positive number')
      .typeError('Must be a positive number'),
    categoryId: Yup.string()
      .oneOf(validationList, 'Choose category')
      .required('Choose category'),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener(`keydown`, handleClose);
    return () => document.removeEventListener(`keydown`, handleClose);
  });

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

  const handleSubmit = ({ amount, comment, categoryId }, actions) => {
    const result = {
      transactionDate: date.toISOString(),
      type,
      categoryId: categoryId,
      comment: comment,
      amount: type === 'EXPENSE' ? +`-${amount}` : amount,
    };
    console.log('RESULT', result);
    dispatch(addTransaction(result));
    // hide();
    actions.resetForm();
  };

  const handleCalendar = date => {
    setDate(date);
  };

  const categoriesList = list
    .filter(item => item.type === 'EXPENSE')
    .map(item => {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <p className={style.error}>{message}</p>}
      />
    );
  };

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <Form className={style.modal}>
            <button
              className={style.close}
              type="button"
              onClick={hide}
            ></button>
            <h2 className={style.header}>Add transaction</h2>
            <ToggleButton
              status={currentStatus}
              name="type"
              onChange={handleType}
            />
            <Transition showIt={showIt} type="opacity" setShowIt={setShowIt}>
              <div className={style.wrapper}>
                <Field as="select" className={style.selector} name="categoryId">
                  <option name="disabled" value="disabled">
                    Select category
                  </option>
                  {categoriesList}
                </Field>
                <FormError name="categoryId" className={style.error} />
              </div>
            </Transition>
            <div className={style.direction}>
              <div className={style.wrapper}>
                <Field
                  className={style.amount}
                  type="text"
                  name="amount"
                  placeholder="0.00"
                ></Field>
                <FormError name="amount" />
              </div>
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
        )}
      </Formik>
    </div>
  );
};
