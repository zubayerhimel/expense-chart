import React from 'react';
import { toTitleCase } from '../utils/helper';

const LegendIndicator = ({ text, color }) => {
  return (
    <div className='legend-item'>
      <div className='legend' style={{ backgroundColor: color }} />
      <span className='legend-text'>{toTitleCase(text)}</span>
    </div>
  );
};

export default LegendIndicator;
