import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import { useMediaQuery } from 'react-responsive';
import notfound from 'assets/background/notfound.png';
import noexpense from 'assets/background/noexpense.png';

//
// const data = [
//   { name: '$14000', value: 0 },
//   { name: 'Main expenses', value: 1700, fill: 'green' },
//   { name: 'Products', value: 3700, fill: 'pinc' },
//   { name: 'Car', value: 1000, fill: '#fd9498' },
//   { name: 'Self care', value: 700, fill: '#c5baff' },
//   { name: 'Child care', value: 500, fill: '#6e78e8' },
//   { name: 'Group B', value: 1800, fill: '#4a56e2' },
//   { name: 'Group C', value: 1200, fill: '#81e1ff' },
//   { name: 'Group D', value: 2200, fill: '#24cca7' },
//   { name: 'Group D', value: 300, fill: '#00ad84' },
// ];

const size = {
  desctop: {
    container: 288,
    innerR: 103,
    outerR: 143,
    position: 139,
  },
  tablet: {
    container: 336,
    innerR: 127,
    outerR: 167,
    position: 163,
  },
  mobile: {
    container: 280,
    innerR: 99,
    outerR: 139,
    position: 135,
  },
};

const getSize = (isDesktop, isTablet, isMobile) => {
  if (isDesktop) {
    return size.desctop;
  } else if (isTablet) {
    return size.tablet;
  }
  return size.mobile;
};

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    color,
  } = props;

  return (
    <g>
      <text
        fontWeight="700"
        fontSize="18"
        lineheight="27"
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={color}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const Chart = ({ transactions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieLeave = useCallback(
    (_, index) => {
      setActiveIndex(0);
    },
    [setActiveIndex]
  );
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 573 });

  const { container, innerR, outerR, position } = getSize(
    isDesktop,
    isTablet,
    isMobile
  );

  const filteredExpenses = transactions.filter(hist => hist.type === 'EXPENSE');
  const filteredIncome = transactions.filter(hist => hist.type === 'INCOME');

  if (filteredExpenses.length !== 0) {
    const isIncome = () => {
      if (filteredIncome.length === 0) {
        return 0;
      }
      return filteredIncome[0].amount;
    };

    const isExpense = () => {
      if (filteredExpenses.length === 0) {
        return 0;
      }
      const expenses = filteredExpenses.reduce((acc, item) => {
        return (acc += item.amount);
      }, 0);
      return expenses;
    };

    const total = isIncome() + isExpense();

    const arr = filteredExpenses.map(({ name, amount, color }) => {
      return {
        name,
        value: -amount,
        fill: color,
      };
    });

    const data = [{ name: `₴ ${total}`, value: 0 }, ...arr];

    return (
      <PieChart
        width={container}
        height={container}
        object-view-box="-30 60 400 400"
      >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={position}
          cy={position}
          innerRadius={innerR}
          outerRadius={outerR}
          fill="#3833a1"
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        />
      </PieChart>
    );
  }
  if (filteredExpenses.length === 0 && filteredIncome.length !== 0) {
    return (
      <div style={{ width: container, height: container }}>
        <img src={noexpense} alt="transaction not found" />
      </div>
    );
  }
  if (filteredExpenses.length === 0 && filteredIncome.length === 0) {
    return (
      <div style={{ width: container, height: container }}>
        <img src={notfound} alt="transaction not found" />
      </div>
    );
  }
};

export default Chart;
