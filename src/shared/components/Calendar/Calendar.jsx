import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.scss';

export const Calendar = ({ date, onSubmit }) => {
  return (
    <div className={style.wrapper}>
      <ReactDatePicker
        className={style.calendar}
        selected={date}
        maxDate={date}
        onChange={chosenDate => {
          onSubmit(chosenDate);
        }}
      />
    </div>
  );
};
