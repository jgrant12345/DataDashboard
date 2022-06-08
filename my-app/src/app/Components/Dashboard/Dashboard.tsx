import React, { useEffect, useState } from "react";
import "./DashBoard.scss"
import { GraphContainer } from "../GraphContainer/GraphContainer";
import Papa from "papaparse";
import StatisticChart from "../StaticComponents/FinancialData.svg"
export const Dashboard : React.FC<any> = () => {
    const [chartData, changeChartData]: any = useState([]);
  const [dataIsLoaded, changeDataIsLoaded] = useState(true);

  useEffect(() => {
    if(chartData.length > 0){
      changeDataIsLoaded(false)
    }
  },[chartData]);
  const changeFileFunction = (event: any) => {
    const myPapaParse = Papa.parse(event.target.files[0], {
      complete: (results) => changeChartData(results.data),
  
    });
  };

  if(dataIsLoaded){
    return ( 
    <div >
        <div id="Container">
    <div id="DownloadAndImageContainer">
    <img  id="StatisticEmblem" src = {StatisticChart} />
    </div>
    <label id="inputLabel">
 <input
      type="file"
      id="myFile"
      name="filename"
      onChange={changeFileFunction}
    />
    Upload CSV File 
    </label>
    </div>
  
</div>)
   
  }


    return (
        <div>     
      <button>Upload CSV Here</button>
            <GraphContainer ChartType= {"ScatterChart"} Height = {"95%"}
            Width = {"100%"} data = {[[2,2], [3,4]]} 
            />
            dashboard</div>
    )
}