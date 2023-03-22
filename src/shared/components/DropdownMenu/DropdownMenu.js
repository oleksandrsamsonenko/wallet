import Select from 'react-select';
import { useState } from 'react';
import { useField } from 'formik';

function DropdownMenu({ options = [], onChange, inc, editable, type }) {
  // eslint-disable-next-line
  const [value, setState] = useState(
    options[options.findIndex(item => item.value === inc)]
  );
  // console.log(`TYPE`, type);
  // eslint-disable-next-line
  const [field, state, { setValue }] = useField(`categoryId`);
  // if (inc) {
  //   onChange(inc);
  // }
  // if ((type = 'INCOME')) {
  //   setValue(`063f1132-ba5d-42b4-951d-44011ca46262`);
  // }
  //   console.log(options);
  // console.log(`inc`, inc);
  //   console.log(options.findIndex(item => item.value === inc));
  //   const INDEX = ;
  return (
    <Select
      options={options}
      value={value}
      placeholder="Select a category"
      isDisabled={editable}
      //   defaultValue={options}
      onChange={value => {
        // setState(value);
        setValue(value.value);
        onChange(value.value);
      }}
      styles={{
        placeholder: baseStyles => ({
          ...baseStyles,
          fontFamily: 'Circe',
          color: '#BDBDBD',
          fontSize: '18px',
          lineHeight: '1.5',
        }),
        control: baseStyles => ({
          ...baseStyles,
          width: '100%',
          height: '32px',
          border: 'none',
          borderBottom: '1px solid #E0E0E0',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          '&:hover': null,
          boxShadow: 'none',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        singleValue: baseStyles => ({
          ...baseStyles,
          fontFamily: 'Circe',
          color: '#000000',
          fontSize: '18px',
          lineHeight: '1.5',
        }),
        menu: base => ({
          ...base,
          margin: 0,
          width: '100%',
          padding: '12px 0',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(25px)',
          borderRadius: '20px',
          overflow: 'hidden',
        }),
        option: (_, state) => ({
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '20px',
          fontFamily: 'Circe',
          fontSize: '18px',
          lineHeight: '1.5',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: state.isSelected ? '' : 'white',
            color: '#FF6596',
          },
          color: state.isSelected ? '#FF6596' : '#000000',
        }),
        menuList: base => ({
          ...base,
          '::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
          },
        }),
      }}
    />
  );
}

export default DropdownMenu;
