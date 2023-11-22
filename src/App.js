import { useEffect, useState } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

import DonutChart from './components/DonutChart';
import { jsonData } from './data/chart-data';

import './App.scss';

function App() {
  const subTitle1 = 'Money Spent',
    subTitle2 = '0df',
    currency = '$',
    showLabel = false,
    colors = ['#4C49ED', '#9D9BF4', '#4FD18B', '#141197'],
    radius = 100,
    hole = 75,
    stroke = 1,
    strokeWidth = 6;

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const activePeriod = queryParams.get('period');

    if (activePeriod === 'null') {
      onPeriodClick('1M');
    } else {
      onPeriodClick(activePeriod);
    }
  }, []);

  const onPeriodClick = (value) => {
    const options = {
      pathname: '/',
      search: `?${createSearchParams({ period: value })}`,
    };
    navigate(options, { replace: true });

    const activeObj = jsonData.find((data) => data.period === value);

    const data = Object.keys(activeObj)
      .filter((key) => key !== 'period')
      .map((key) => activeObj[key]);

    setChartData(data);
  };

  return (
    <div className='container'>
      <span className='title'>Expense Chart</span>
      <div className='card'>
        <span className='card-title'>Expenses</span>
        <div className='time-tab'>
          <ul>
            {jsonData?.map(({ period }) => (
              <li key={period} onClick={() => onPeriodClick(period)} className={queryParams.get('period') === period ? 'active' : ''}>
                {period}
              </li>
            ))}
          </ul>
        </div>

        <DonutChart
          key={chartData}
          data={chartData}
          subTitle1={subTitle1}
          subTitle2={subTitle2}
          radius={radius}
          hole={hole}
          colors={colors}
          stroke={stroke}
          strokeWidth={strokeWidth}
          showLabel={showLabel}
          currency={currency}
        />
      </div>
    </div>
  );
}

export default App;
