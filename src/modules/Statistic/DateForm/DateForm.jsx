import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Select, { components } from 'react-select';
import month from './month';
import years from './years';
import styles from './date-form.module.scss';

const size = {
  desctop: { width: 182 },
  tablet: { width: 160 },
  mobile: { width: 280 },
};

const getSize = (desktop, tablet, mobile) => {
  if (desktop) {
    return size.desctop;
  }
  if (tablet) {
    return size.tablet;
  }
  return size.mobile;
};

const DateForm = ({ onGetMonth, onGetYear }) => {
  const handleChangeMonth = ({ value }) => {
    onGetMonth(value);
  };
  const handleChangeYear = ({ label }) => {
    onGetYear(label);
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

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 573 });

  const { width } = getSize(isDesktop, isTablet, isMobile);

  return (
    <div className={styles.form}>
      <Select
        classNamePrefix="react-select"
        onChange={handleChangeMonth}
        // defaultValue={month[0]}
        options={month}
        components={{ DropdownIndicator }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: '16px',
            fontWeight: 400,
            paddingLeft: '10px',
            boxShadow: 'none',
            width: width,
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
            width: width,
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
        classNamePrefix="react-select"
        onChange={handleChangeYear}
        // defaultValue={years[0]}
        options={years}
        components={{ DropdownIndicator }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: '16px',
            fontWeight: 400,
            paddingLeft: '10px',
            boxShadow: 'none',
            width: width,
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
            width: width,
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
    </div>
  );
};

export default DateForm;
