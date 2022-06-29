import React,{useState,useEffect,useRef,useContext} from "react";
import { ReactDOM } from "react-dom";
import scrambleContext from "../context/scrambleContext";
function Scramble(props){


  let scarmble=useContext(scrambleContext)
  let f_scramble=scarmble.scarmble.join(" ")
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
useKey("Space",sendScramble)
let running=false;
function sendScramble(){
if(!running)
{
    running=true;
    return;
}
else
{
    running=false;
    props.onGetScramble(f_scramble);
}
}
  return (
    <nav className="navbar bg-info border border-primary" >
    <div className="container-fluid d-flex justify-content-center display-6 ">
      <span className="navbar-text text-white">
       {f_scramble}
      </span>
    </div>
  </nav>
  )

}
export default Scramble