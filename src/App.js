import { useEffect, useState } from 'react';

import DonutChart from './components/DonutChart';
import LegendIndicator from './components/LegendIndicator';
import { jsonData } from './data/chart-data';

import './App.scss';

function App() {
  const currency = '$',
    showLabel = false,
    colors = ['#4C49ED', '#9D9BF4', '#4FD18B', '#141197'],
    radius = 100,
    hole = 75,
    stroke = 1,
    strokeWidth = 6,
    legendData = Object.keys(jsonData[0]).filter((key) => key !== 'period');

  const [chartData, setChartData] = useState({ dataArr: [], sum: 0 });
  const [activePeriod, setActivePeriod] = useState('1M');

  useEffect(() => {
    onPeriodClick(activePeriod);
  }, []);

  const onPeriodClick = (value) => {
    setActivePeriod(value);
    const activeObj = jsonData.find((data) => data.period === value);

    // get the values of the legend in array format except period key
    const data = Object.keys(activeObj)
      .filter((key) => key !== 'period')
      .map((key) => activeObj[key]);

    const dataSum = data?.reduce((prev, curr) => prev + curr, 0);

    setChartData({ dataArr: data, sum: dataSum });
  };

  return (
    <div className='container'>
      <span className='title'>Expense Chart</span>
      <div className='card'>
        <span className='card-title'>Expenses</span>
        <div className='time-tab'>
          <ul>
            {jsonData?.map(({ period }) => (
              <li key={period} onClick={() => onPeriodClick(period)} className={activePeriod === period ? 'active' : ''}>
                {period}
              </li>
            ))}
          </ul>
        </div>

        <DonutChart
          key={chartData.sum} // trigger re-render for every period change
          data={chartData.dataArr}
          totalSum={chartData.sum}
          radius={radius}
          hole={hole}
          colors={colors}
          stroke={stroke}
          strokeWidth={strokeWidth}
          showLabel={showLabel}
          currency={currency}
        />
        <div className='legend-wrapper'>
          {legendData?.map((legend, index) => (
            <LegendIndicator key={index} text={legend} color={colors[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
