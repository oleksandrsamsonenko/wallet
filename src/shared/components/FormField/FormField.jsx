import css from './FormField.module.scss';
const FormField = ({ ...props }) => {
  return (
    <div>
      <input {...props} className={css.input} autoComplete="off" />
      <label htmlFor=""></label>
    </div>
  );
};
export default FormField;
