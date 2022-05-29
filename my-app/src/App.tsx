import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Chart } from "react-google-charts";
import { GraphContainer } from "./app/Components/GraphContainer/GraphContainer";
import "./App.css";

function App() {
  return (
    <div>
      <GraphContainer
        ChartType={"testing"}
        Height={23}
        Width={3}
        data={[1, 2, 3]}
      />
    </div>
  );
}

export default App;
