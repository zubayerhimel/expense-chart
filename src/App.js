import './App.scss';
import DonutChart from './components/DonutChart';

function App() {
  const data = [5, 12, 8, 73, 100],
    subTitle1 = 'Money Spent',
    subTitle2 = '0df',
    currency = '$',
    showLabel = false,
    colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
    radius = 100,
    hole = 75,
    stroke = 1,
    strokeWidth = 6;

  return (
    <div className='container'>
      <span className='title'>Expense Chart</span>
      <div className='card'>
        <span className='card-title'>Expenses</span>
        <div className='time-tab'>
          <ul>
            <li>1M</li>
            <li>6M</li>
            <li>1Y</li>
            <li>ALL TIME</li>
          </ul>
        </div>

        <DonutChart
          data={data}
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
