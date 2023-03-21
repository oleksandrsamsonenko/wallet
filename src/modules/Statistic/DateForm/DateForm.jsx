import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Select, { components } from 'react-select';
import month from './month';
import years from './years.js';
import styles from './date-form.module.scss';

const size = {
  desctop: { width: 182 },
  tablet: { width: 160 },
  mobile: { width: 280 },
};

const getSize = (isDesktop, isTablet) => {
  if (isDesktop) {
    return size.desctop;
  }
  if (isTablet) {
    return size.tablet;
  }
  return size.mobile;
};

const DateForm = ({ onGetMonth, onGetYear }) => {
  const handleChangeMonth = data => {
    if (data) {
      onGetMonth(data.value);
      return;
    }
    onGetMonth(0);
  };

  const handleChangeYear = data => {
    if (data) {
      onGetYear(data.label);
      return;
    }
    onGetYear(0);
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

  const ClearIndicator = (props, { clearValue }) => {
    return (
      <components.ClearIndicator {...props}>
        <div className={styles.close_filter} onClick={clearValue}>
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            class="css-tj5bde-Svg"
            fill="currentColor"
          >
            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
          </svg>
        </div>
      </components.ClearIndicator>
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
        isClearable={true}
        //выключает открытие клавиатуры на мобильном
        isSearchable={false}
        // defaultValue={month[0]}

        options={month}
        components={{ DropdownIndicator, ClearIndicator }}
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
        //выключает открытие клавиатуры на мобильном
        isSearchable={false}
        // defaultValue={years[0]}
        options={years}
        isClearable={true}
        components={{ DropdownIndicator, ClearIndicator }}
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
