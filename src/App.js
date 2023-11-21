import './App.scss';

function App() {
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
      </div>
    </div>
  );
}

export default App;
