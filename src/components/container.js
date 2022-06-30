import React from "react";
import Table from "./table";
import Timer from './timer';
import VisualScramble from "./visualScramble";
import AverageStats from "./averageStats";

function Container(props){
    function getTime(time)
    {

        props.sendTime(time);
    }
    function resetSession(){
        props.clearSession();
    }
    return(
        <div className="container-fluid overflow-y:scroll" style={{height:"82vh"}}>
        <div className="row overflow-y:scroll "style={{maxHeight:"100px"}}>
          <div className="col-sm-2 border border-white overflow:auto"  style={{height:"82vh"}}>
          <Table stats={props.stats} clearSession={resetSession} />
          </div>
          <div className="col-sm-6 border border-white d-flex justify-content-center align-items-center" style={{height:"82vh"}} >
        
        <Timer sendTime={getTime}  />
          </div>
          <div className="col-sm-4 border border-primary d-flex flex-column justify-content-between" style={{height:'82h'}}>
            <AverageStats stats={props.stats} currAvg={props.currAvg} bestAvg={props.bestAvg} />
            <VisualScramble />
          </div>
        </div>
      </div>
    )
}
export default Container