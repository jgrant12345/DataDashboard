import React, { useEffect, useState } from "react";
import "./GraphContainer.scss"
import { Chart, GoogleChartWrapperChartType } from "react-google-charts";
import Papa from "papaparse";


type Props = {
    ChartType: GoogleChartWrapperChartType,
    Width: string,
    Height: string,
    data: number[][]
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
export const GraphContainer : React.FC<Props> = ({ChartType, Width, Height, data}) =>{
  const [chartData, changeChartData] : any = useState([]);
  const myFunction = (results: any) => {
    console.log(results)
        changeChartData(results);
        console.log(chartData)
  }
  useEffect(() =>  {
    console.log(chartData)
  })
  const changeFileFunction = (event: any) => {
  
    const myPapaParse = Papa.parse(event.target.files[0], {complete: results => changeChartData(results.data)
  })}



    return (
      
        <div id="GraphContainer">
          <form>
  <input type="file" id="myFile" name="filename" onChange={changeFileFunction} />
  <input type="submit" />
    </form>
        <Chart
  chartType= {ChartType}
  data={[["Age", "Weight"], data[0], data[1]]}
  width= {Width}
  height= {Height}
  legendToggle
/></div>
    )
}

