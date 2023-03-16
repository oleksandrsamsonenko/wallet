import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import styles from './chart-module.scss';
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

const renderActiveShape = props => {
  // const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    // midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    // percent,
    // value,
    color,
  } = props;
  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius + 10) * cos;
  // const sy = cy + (outerRadius + 10) * sin;
  // const mx = cx + (outerRadius + 30) * cos;
  // const my = cy + (outerRadius + 30) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const ey = my;
  // const textAnchor = cos >= 0 ? 'start' : 'end';
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
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      /> */}
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

export default function App() {
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

  return (
    <div className={styles.pie}>
      <PieChart width={290} height={290} object-view-box="-30 60 400 400">
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={140}
          cy={140}
          innerRadius={100}
          outerRadius={144}
          fill="#3833a1"
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        />
      </PieChart>
    </div>
  );
}
