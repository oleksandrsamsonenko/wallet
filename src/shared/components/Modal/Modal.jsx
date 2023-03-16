import { useEffect, useState } from 'react';
import style from './Modal.module.scss';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Calendar } from '../Calendar/Calendar';
import { Transition } from '../Transition/Transition';
import data from '../../../data/categories';

export const Modal = ({ hide }) => {
  const [showIt, setShowIt] = useState(false);

  const [type, setType] = useState('expense');
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(``);
  const [comment, setComment] = useState(``);
  const [category, setCategory] = useState(``);

  useEffect(() => {
    document.addEventListener(`keydown`, handleClose);
    return () => document.removeEventListener(`keydown`, handleClose);
  });

  useEffect(() => {
    if (type === `income`) {
      setCategory(`income`);
    }
  }, [type]);

  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hide();
    }
  };

  const result = {
    type,
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    amount,
    comment,
    category,
  };

  const currentStatus = type === 'expense' ? true : false;

  const handleType = () => {
    type === 'expense' ? setType('income') : setType('expense');
    setShowIt(ps => !ps);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(result);
  };

  const handleCalendar = date => {
    setDate(date);
  };

  const handleAmount = ({ target }) => {
    setAmount(target.value);
  };

  const handleComment = ({ target }) => {
    setComment(target.value);
  };

  const handleCategory = ({ target }) => {
    setCategory(target.value);
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
      <form onSubmit={handleSubmit} className={style.modal}>
        <button className={style.close} type="button" onClick={hide}></button>
        <h2 className={style.header}>Add transaction</h2>
        <ToggleButton status={currentStatus} onChange={handleType} />
        <Transition showIt={showIt} setShowIt={setShowIt}>
          <label>
            <select
              required
              onChange={handleCategory}
              className={style.selector}
              name="categories"
              id="selection"
            >
              {selectionElements}
            </select>
          </label>
        </Transition>
        <div className={style.direction}>
          <input
            onChange={handleAmount}
            value={amount}
            className={style.amount}
            type="number"
            placeholder="0.00"
            required
          />
          <Calendar date={date} onSubmit={handleCalendar} />
        </div>
        <label>
          <textarea
            value={comment}
            onChange={handleComment}
            className={style.comment}
            type="text"
            placeholder="comment"
          />
        </label>
        <button className={style.add} type="submit">
          ADD
        </button>
        <button className={style.cancel} type="button" onClick={hide}>
          CANCEL
        </button>
      </form>
    </div>
  );
};
