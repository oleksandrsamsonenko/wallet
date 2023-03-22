import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createPortal } from 'react-dom';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Calendar } from '../Calendar/Calendar';
import { Transition } from '../Transition/Transition';
import {
  addTransaction,
  editTransactions,
} from 'redux/AddTransaction/addTransaction-operations';
import { categories } from 'redux/AddTransaction/addTransaction-selectors';
import { TransitionOnClick } from '../Transition/Transition';
import style from './Modal.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const initialIncomeCategory = [
  {
    id: 'default',
    type: `INCOME`,
  },
];

export const Modal = ({
  textProp,
  typeProp = 'EXPENSE',
  amountProp = '',
  dateProp,
  commentProp = '',
  categoryProp,
  preventEdit,
  id,
  showIt,
  setShowIt,
}) => {
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [incomeCat, setIncomeCat] = useState(initialIncomeCategory);
  const incomeCategory = useSelector(categories);
  const list = useSelector(categories);

  const modalRoot = document.querySelector('#modal-root');
  const body = document.querySelector('body');
  const exitBtn = document.querySelector('#exit');
  const addBtn = document.querySelector('#add');
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [dropDown, setDropDown] = useState('');
  const currentStatus = type === 'EXPENSE' ? true : false;
  // console.log(`modal rendered`);
  useEffect(() => setToggle(currentStatus), [currentStatus, toggle]);
  // console.log(`DROPDOWN MODAL`, dropDown);
  useEffect(() => {
    setDate(dateProp);
  }, [dateProp]);

  useEffect(() => {
    if (incomeCategory.length !== 0) {
      setIncomeCat(incomeCategory);
    }
    setType(typeProp);
  }, [incomeCategory, typeProp]);

  //// запрет скролла боди при маунте модального окна,
  //// добавление слушателя для закрытия по Эскейп,
  //// дизейбл повторного нажатия кнопки выхода на хэдере

  useEffect(() => {
    if (showIt) {
      document.addEventListener(`keydown`, handleClose);
    }
    return () => document.removeEventListener(`keydown`, handleClose);
  });

  useEffect(() => {
    if (showIt) {
      body.classList.add('modal-open');
      exitBtn.setAttribute('disabled', true);
      addBtn.classList.add('hidden-button');
    }
  }, [showIt, body, exitBtn, addBtn]);

  //// Получение адекватных названий категорий из айди

  let incomeId = incomeCat.find(item => item.type === 'INCOME').id;
  const validCategories = list
    .filter(item => item.type === 'EXPENSE')
    .map(item => item.id);

  // const categoriesList = list
  //   .filter(item => item.type === 'EXPENSE')
  //   .map(item => {
  //     return (
  //       <option value={item.id} key={item.id}>
  //         {item.name}
  //       </option>
  //     );
  //   });

  const dropDownList = list
    .filter(item => item.type === 'EXPENSE')
    .map(item => {
      return { value: item.id, label: item.name };
    });

  //// Схема валидации и вывода ошибок валидации

  const validationList =
    type === 'EXPENSE'
      ? validCategories
      : [...validCategories, incomeId, 'disabled'];

  const initialValues = {
    amount: amountProp,
    comment: commentProp,
    categoryId: categoryProp,
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .positive('Must be a positive number')
      .required('Amount is required')
      .typeError('Must be a number'),
    categoryId:
      type === 'EXPENSE'
        ? Yup.string()
            .oneOf(validationList, 'Choose category')
            .required('Choose category')
        : Yup.string(),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <p className={style.error}>{message}</p>}
      />
    );
  };

  //// Функции для работы с инпутами и селекторами

  const handleType = () => {
    type === 'EXPENSE' ? setType('INCOME') : setType('EXPENSE');
    setToggle(prevState => (prevState ? false : true));
  };

  const handleSubmit = ({ amount, comment, categoryId }) => {
    // console.log(categoryId);
    if (type === `INCOME`) {
      categoryId = incomeId;
    }
    const result = {
      transactionDate: new Date(date).toISOString(),
      type,
      categoryId: categoryId,
      comment: comment,
      amount: type === 'EXPENSE' ? +`-${amount}` : +amount,
    };

    // console.log(
    //   `valid`,
    //   validationList.find(item => item === dropDown)
    // );

    textProp === 'Edit'
      ? dispatch(editTransactions({ result, id }))
      : dispatch(addTransaction(result));
    // console.log(result);
    hideModal();
  };

  const handleCalendar = date => {
    setDate(date);
  };

  const hideModal = () => {
    setShowIt(false);
    body.classList.remove('modal-open');
    exitBtn.removeAttribute('disabled');
    addBtn.classList.remove('hidden-button');
    if (textProp === 'Add') {
      setType('EXPENSE');
    }
  };

  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hideModal();
    }
  };
  // console.log(categoryProp);
  return createPortal(
    <TransitionOnClick showIt={showIt} type={'opacity'}>
      <div className={style.backdrop} onClick={handleClose}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          <Form className={style.modal}>
            <div className={style.div}>
              <button
                className={style.close}
                type="button"
                onClick={hideModal}
              ></button>
              <h2 className={style.header}>{textProp} transaction</h2>
              <ToggleButton
                status={currentStatus}
                name="type"
                onChange={handleType}
                disabled={preventEdit}
              />
              <div
                style={{ height: '73px', width: '100%', paddingTop: '38px' }}
              >
                <Transition
                  showIt={toggle}
                  type="opacity"
                  setShowIt={setToggle}
                >
                  <div className={style.dropwrapper}>
                    <Field
                      className={style.selector}
                      name="categoryId"
                      options={dropDownList}
                      onChange={setDropDown}
                      inc={categoryProp}
                      editable={preventEdit}
                      component={DropdownMenu}
                      type={type}
                    ></Field>
                    {/* <Field
                      as="select"
                      className={style.selector}
                      disabled={preventEdit}
                      name="categoryId"
                    >
                      <option name="disabled" value="disabled">
                        Select category
                      </option>
                      {categoriesList}
                    </Field> */}
                    {/* {error && <p className={style.error}>Choose category</p>} */}
                    <FormError name="categoryId" className={style.error} />
                  </div>
                </Transition>
              </div>
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
                <Calendar
                  preventEdit={preventEdit}
                  date={date}
                  onSubmit={handleCalendar}
                />
              </div>
              <Field
                as="textarea"
                className={style.comment}
                type="text"
                placeholder="comment"
                name="comment"
              ></Field>

              <button className={style.add} type="submit">
                {textProp.toUpperCase()}
              </button>

              <button
                className={style.cancel}
                type="button"
                onClick={hideModal}
              >
                CANCEL
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </TransitionOnClick>,
    modalRoot
  );
};
