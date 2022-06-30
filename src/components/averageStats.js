import React,{useState} from "react";

function AverageStats(props) {

    
  return (
    <div style={{height:"18vh"}}>
      <table className="table text-white table-borderless overflow-y:scroll table-responsive">
        <thead>
          <tr className="d-flex align-items-center justify-content-center border">
            <th scope="col border" ></th>
            <th scope="col">Current</th>
    
            <th scope="col">Best</th>
          </tr>
          <tr className="d-flex align-items-center justify-content-center border">
          <th scope="col border" ></th>
          <th scope="col border" >{props.currAvg}</th>
          <th scope="col border" >{props.bestAvg !==10000000.00 ? props.bestAvg : "-"}</th>
          
          </tr>
        </thead>
        <tbody className="overflow-y:scroll d-flex flex-column align-items-center"></tbody>
      </table>
    </div>
  );
}

export default AverageStats;
