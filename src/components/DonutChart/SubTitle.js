import React from 'react';

const SubTitle = ({ radius, fill, textAnchor, totalSum, currency }) => {
  return (
    <text x={radius} y={radius} fill={fill} textAnchor={textAnchor}>
      <tspan x={radius} y={radius + 10} fontSize={26}>
        {currency}&nbsp;
        {totalSum.toLocaleString()}
      </tspan>
      <tspan fill='#afadfe'>.00</tspan>
    </text>
  );
};

export default SubTitle;
