import style from './ToggleButton.module.scss';

export const ToggleButton = ({ status, onChange, disabled }) => {
  const incomeColor = !status
    ? 'rgba(36, 204, 167, 1)'
    : 'rgba(224, 224, 224, 1)';
  const expenseColor = status
    ? 'rgba(255, 101, 150, 1)'
    : 'rgba(224, 224, 224, 1)';

  const fullClassName = disabled ? style.sliderDisabled : style.slider;
  return (
    <div className={style.wrapper}>
      <span style={{ color: incomeColor }} className={style.income}>
        Income
      </span>
      <label className={style.switch}>
        <input
          className={style.input}
          type="checkbox"
          checked={status}
          onChange={onChange}
          disabled={disabled}
        />
        <span className={fullClassName}></span>
      </label>
      <span style={{ color: expenseColor }} className={style.expense}>
        Expense
      </span>
    </div>
  );
};
