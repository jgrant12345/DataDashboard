import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Chart } from "react-google-charts";
import './App.css';

function App() {
  return (
    <div className="App">
    <Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [8, 12],[1, 4],[5, 7], [.2,.2]]}
  width="100%"
  height="400px"
  legendToggle
/>
    </div>
  );
}

export default App;
