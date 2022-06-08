import React from "react";

function Table(props){
    let times=[];
    console.log(props.stats)
    for(let i=0;i<props.stats.length;i++)
    {
        times.push(<tr>
            <th scope="row"><button type="button" className="btn text-white">{i+1}</button></th>
            <td><button type="button" className="btn text-white">{props.stats[i].time.seconds}:{props.stats[i].time.miliSeconds}</button></td>
          </tr>)
    }
function clearSession(){
    props.clearSession();
}
    
return(
    <React.Fragment>
{/* <div classNameName="d-flex justify-content-center"> */}
        <table className="table text-white table-borderless overflow-y:scroll table-responsive" style={{height:"82vh"}} >
  <thead className="overflow-y:scroll" >
    <tr className="d-flex align-items-center justify-content-center">
      <th scope="col" className="overflow-y:auto">No.</th>
      <th scope="col" className="overflow-y:auto ">Time</th>
      <th scope="col" className="overflow-y:auto"><button className="btn btn-primary" onClick={clearSession}>X</button></th>
    </tr>
  </thead>
  <tbody className="overflow-y:scroll d-flex flex-column align-items-center" style={{height:"72vh",overflowY:"auto"}}>
    {times}
  </tbody>
</table>
{/* </div> */}
    </React.Fragment>
)
}

export default Table