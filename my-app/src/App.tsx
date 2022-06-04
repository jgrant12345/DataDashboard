import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Chart } from "react-google-charts";
import { GraphContainer } from "./app/Components/GraphContainer/GraphContainer";
import "./App.css";
import Papa from "papaparse";
import { Dashboard } from "./app/Components/Dashboard/Dashboard";

function App() {
  
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
