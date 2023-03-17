import React from 'react';
import Select, { components } from 'react-select';
import month from './month';
import years from './years.js';
import styles from './date-form.module.scss';

const DateForm = () => {
  const handleChange = ({ label }) => {
    console.log(label);
    //сюда вешать логику!!!
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          margin-right="20"
          width="18"
          height="9"
          viewBox="0 0 20 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L10 10L19 1" stroke="black" />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <div className={styles.form}>
      <Select
        classNames={styles.control}
        classNamePrefix="react-select"
        onChange={handleChange}
        defaultValue={month[0]}
        options={month}
        components={{ DropdownIndicator }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: '16px',
            fontWeight: 400,
            paddingLeft: '10px',
            boxShadow: 'none',
            width: 280,
            height: 50,
            border: '1px solid #000000',
            borderRadius: '30px',
            cursor: 'pointer',
            ':hover': {
              border: '1px solid #000000',
            },

            //стилизация инпута
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            margin: 0,
            borderRadius: '20px',
            width: 280,
            overflow: 'hidden',
            backgroundColor: '#F5F6F5',
            backdropFilter: 'blur(25px)',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            // стилизация свыпадающего окна
          }),
          menuList: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,

            //стилизация всего списка типа <ul> то что находится внутри меню
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            margin: 0,
            fontWeight: 400,
            paddingLeft: '20px',
            fontSize: '16px',
            lineHeight: 1.5,
            color: 'black',
            cursor: 'pointer',

            backgroundColor: state.isFocused ? 'white' : 'undefinde',
            //стилизация опций которые находятся внутри выпадающего окна
          }),

          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            width: 0,
            //индикатор разделения между перед стрелкой. если поставить 1px и больше он появится
          }),

          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            marginRight: 20,
            //вектор который разкрывает меню
          }),
        }}
      />
      <Select
        onChange={handleChange}
        defaultValue={years[0]}
        options={years}
        classNamePrefix="react-select"
        components={{ DropdownIndicator }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: '16px',
            fontWeight: 400,
            paddingLeft: '10px',
            boxShadow: 'none',
            width: 280,
            height: 50,
            border: '1px solid #000000',
            borderRadius: '30px',
            cursor: 'pointer',
            ':hover': {
              border: '1px solid #000000',
            },

            //стилизация инпута
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            margin: 0,
            borderRadius: '20px',
            width: 280,
            overflow: 'hidden',
            backgroundColor: '#F5F6F5',
            // cursor: "pointer",
            backdropFilter: 'blur(25px)',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            // стилизация свыпадающего окна
          }),
          menuList: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,

            //стилизация всего списка типа <ul> то что находится внутри меню
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            margin: 0,
            fontWeight: 400,
            paddingLeft: '20px',
            fontSize: '16px',
            lineHeight: 1.5,
            color: 'black',
            cursor: 'pointer',

            backgroundColor: state.isFocused ? 'white' : 'undefinde',
            //стилизация опций которые находятся внутри выпадающего окна
          }),

          indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            width: 0,
            //индикатор разделения между перед стрелкой. если поставить 1px и больше он появится
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            marginRight: 20,
            //вектор который разкрывает меню
          }),
        }}
      />

      {/* <Formik>
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="month"
            as="select"
            onChange={handleChange}
            placeHolder="select"
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
      </Formik> */}
    </div>
  );
};

export default DateForm;
