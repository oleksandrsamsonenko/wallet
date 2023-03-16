import { useEffect, useState } from 'react';
import style from './Modal.module.scss';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Calendar } from '../Calendar/Calendar';
import { Transition } from '../Transition/Transition';
import data from '../../../data/categories';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  amount: '',
  comment: '',
  categoryId: 'Income',
};

export const Modal = ({ hide }) => {
  const [showIt, setShowIt] = useState(false);

  const [type, setType] = useState('expense');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.addEventListener(`keydown`, handleClose);
    return () => document.removeEventListener(`keydown`, handleClose);
  });

  //   useEffect(() => {
  //     if (type === `income`) {
  //       setCategory(`income`);
  //     }
  //   }, [type]);

  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hide();
    }
  };

  const currentStatus = type === 'expense' ? true : false;

  const handleType = () => {
    type === 'expense' ? setType('income') : setType('expense');
    setShowIt(ps => !ps);
  };

  const handleSubmit = (
    { amount, comment, categoryId = 'income' },
    actions
  ) => {
    const result = {
      amount: +amount,
      comment: comment,
      categoryId: categoryId,
      type,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    };
    console.log('RESULT', result);

    actions.resetForm();
  };

  const handleCalendar = date => {
    setDate(date);
  };

  const selectionElements = data.map(element => {
    return (
      <option key={element.id} value={element.name}>
        {element.name}
      </option>
    );
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
          <Transition showIt={showIt} setShowIt={setShowIt}>
            <Field
              as="select"
              className={style.selector}
              name="categoryId"
              //   value={category}
              //   onChange={handleCategory}
            >
              <option value="">Select category</option>
              {selectionElements}
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
