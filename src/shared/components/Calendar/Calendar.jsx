import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.scss';

export const Calendar = ({ date, onSubmit, preventEdit }) => {
  const currentDate = new Date();
  return (
    <div className={style.wrapper}>
      <ReactDatePicker
        disabled={preventEdit}
        className={style.calendar}
        selected={new Date(date)}
        dateFormat="dd/MM/yyyy"
        maxDate={currentDate}
        onChange={chosenDate => {
          onSubmit(chosenDate);
        }}
      />
    </div>
  );
};
