import React from "react";
import "./GraphContainer.scss"
import { Chart } from "react-google-charts";

type Props = {
    ChartType: String,
    Width: number,
    Height: number,
    data: number[]
}

export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
  export const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
export const GraphContainer : React.FC<Props> = ({ChartType}) =>{
    return (
        <div>
        <Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="200px"
  legendToggle
/></div>
    )
}

