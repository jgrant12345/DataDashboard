import React, { useState } from "react";
import { GraphContainer } from "../GraphContainer/GraphContainer";
import Papa from "papaparse";
export const Dashboard : React.FC<any> = () => {
    return (
        <div>
                  
      <button>Upload CSV Here</button>
            <GraphContainer ChartType= {"ScatterChart"} Height = {"98%"}
            Width = {"98%"} data = {[[2,2], [3,4]]} 
            />
            dashboard</div>
    )
}