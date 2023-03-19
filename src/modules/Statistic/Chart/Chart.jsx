import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import { useMediaQuery } from 'react-responsive';
const data = [
  { name: '$14000', value: 0 },
  { name: 'Main expenses', value: 1700, fill: '#fed057' },
  { name: 'Products', value: 3700, fill: '#ffd8d0' },
  { name: 'Car', value: 1000, fill: '#fd9498' },
  { name: 'Self care', value: 700, fill: '#c5baff' },
  { name: 'Child care', value: 500, fill: '#6e78e8' },
  { name: 'Group B', value: 1800, fill: '#4a56e2' },
  { name: 'Group C', value: 1200, fill: '#81e1ff' },
  { name: 'Group D', value: 2200, fill: '#24cca7' },
  { name: 'Group D', value: 300, fill: '#00ad84' },
];

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

const Chart = () => {
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
};
export default Chart;
