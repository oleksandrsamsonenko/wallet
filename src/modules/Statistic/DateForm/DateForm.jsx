import { Formik, Form, Field } from 'formik';
import months from './month.json';
import years from './years.json';
import styles from './date-form.module.scss';

const DateForm = () => {
  const monthList = months.map(({ id, value, name }) => (
    <option key={id} value={value}>
      {name}
    </option>
  ));

  const yearsList = years.map(({ id, year }) => (
    <option key={id} value={year}>
      {year}
    </option>
  ));

  const handleChange = e => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <Formik>
      <Form className={styles.form}>
        <Field
          className={styles.input}
          name="month"
          as="select"
          onChange={handleChange}
        >
          {monthList}
        </Field>
        <Field
          className={styles.input}
          name="year"
          as="select"
          onChange={handleChange}
        >
          {yearsList}
        </Field>
      </Form>
    </Formik>
  );
};
export default DateForm;
