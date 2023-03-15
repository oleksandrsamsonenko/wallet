import { useEffect, useState } from 'react';
import style from './Modal.module.scss';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { Calendar } from '../Calendar/Calendar';

export const Modal = () =>
  // { hide }
  {
    const [type, setType] = useState('expense');
    const [startDate, setStartDate] = useState(new Date());
    const [amount, setAmount] = useState(``);
    const [comment, setComment] = useState(``);
    const [category, setCategory] = useState(``);

    const currentStatus = type === 'expense' ? true : false;

    const handleType = () => {
      type === 'expense' ? setType('income') : setType('expense');
    };

    const handleSubmit = event => {
      event.preventDefault();
      console.log(`submit`);
    };

    const handleCalendar = date => {
      setStartDate(date);
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

    //   useEffect(() => {
    //     document.addEventListener(`keydown`, handleClose);
    //     return () => document.removeEventListener(`keydown`, handleClose);
    //   });

    //   const handleClose = event => {
    //     if (event.code === 'Escape' || event.target === event.currentTarget) {
    //       hide();
    //     }
    //   };
    return (
      <div
        className={style.backdrop}
        //   onClick={handleClose}
      >
        <form onSubmit={handleSubmit} className={style.modal}>
          <h2 className={style.header}>Add transaction</h2>
          <ToggleButton status={currentStatus} onChange={handleType} />
          {currentStatus && (
            <label>
              <select
                onChange={handleCategory}
                className={style.selector}
                name="categories"
                id="selection"
              >
                <option value="">--Please choose an option--</option>
                <option value="main">Main expenses</option>
                <option value="products">Products</option>
                <option value="car">car</option>
              </select>
            </label>
          )}
          <label>
            <input
              onChange={handleAmount}
              value={amount}
              className={style.amount}
              type="number"
              placeholder="0.00"
              required
            />
          </label>
          <Calendar date={startDate} onSubmit={handleCalendar} />
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
          <button
            className={style.cancel}
            type="button"
            // onClick={hide}
          >
            CANCEL
          </button>
        </form>
      </div>
    );
  };
