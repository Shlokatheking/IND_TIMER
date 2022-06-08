import React ,{useState,useEffect, useRef} from "react";
import { ReactDOM } from "react-dom";


function Timer(props){
function useKey(key,callBack){
    const callbackRef=useRef(callBack);

    useEffect(()=>{
        callbackRef.current=callBack
    })
    useEffect(()=>{
        function handle(event){
            if(event.code===key){
                callbackRef.current(event)
            }
        }
        document.addEventListener("keypress",handle);
        return ()=>document.removeEventListener("keypress",handle)
    },[key])
}
useKey("Space",toggleTimer)





const[mili,setMiliseconds] = useState(0);
const[seconds,setSeconds]=useState(0);
const[identifier_sec,setIdentifier_sec]=useState(undefined) ;
const[identifier_mili,setIdentifier_mili]=useState(undefined) ;
const[isrunning,setIsrunning]=useState(false)
const[final_time,setFinal_time]=useState(0);


function toggleTimer(){
    if(!isrunning)
    startTimer();
    else
    stopTimer();
}
function startTimer(){  
    if(isrunning)
    return;
    setIsrunning(true)
    setMiliseconds(0);
    setSeconds(0)
setIdentifier_sec(setInterval(setTime, 1000));
setIdentifier_mili(setInterval(setMili, 10));
function setTime(){
    setSeconds(prev=>prev+1)

}
function setMili(){
    setMiliseconds(prev=>prev==99 ?0:prev+1)
}

}

function stopTimer(){
    clearInterval(identifier_sec)
    clearInterval(identifier_mili)
    setIsrunning(false)
    if(mili<10)
    {
    props.sendTime({seconds:seconds,miliSeconds:`0${mili.toString()}`})
    setFinal_time(`${seconds}:0${mili}`)
    }
    else
    {
        props.sendTime({seconds:seconds,miliSeconds:`${mili.toString()}`})
        setFinal_time(`${seconds}:${mili}`)      
    }

}

return (
    <div className="d-flex flex-column ">
        {isrunning &&  <h1 style={{color:"white",fontSize:"80pt"}}>{seconds} : {mili}</h1> }
        {!isrunning && <h1 style={{color:"white",fontSize:"80pt"}}>{final_time}</h1> }
      
{/* <button className="btn btn-secondary" onClick={startTimer}>Start</button>
<button className="btn btn-primary" onClick={stopTimer}>STOP</button> */}
</div>)
}

export default Timer

