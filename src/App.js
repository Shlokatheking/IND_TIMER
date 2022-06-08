
import './App.css';
import Header from "./components/header"

import React,{useState, useEffect} from 'react';
import Scramble from './components/scramble';
import Container from './components/container';
import Modal from './components/modal';


function App() {
const [scramble,setScramble]=useState("");
const [solve,setSolve]= useState([])

useEffect(()=>{
  setSolve([])
  let st="1";
  let local_stats=[];
  while(localStorage.getItem(st)!=undefined)
  {
    let stat=JSON.parse(localStorage.getItem(st))
    local_stats.push(stat);
    st=parseInt(st);
    st++;
    st=st.toString();

  }
  console.log(local_stats)
  for(let i=0;i<local_stats.length;i++)
  setSolve((prev)=>{
    return [...prev,local_stats[i]]
  })
},[])
function getScramble(scramble)
{ 
  setScramble(scramble);

}
function getTime(time)
{
  console.log(time, " ",scramble)
  setSolve((prev)=>{
   return [...prev,{time:time,scramble:scramble}];
  })
  localStorage.setItem(`${solve.length+1}`,JSON.stringify({time:time,scramble:scramble}))
}
function clearLocalStorage(){
  localStorage.clear()
  setSolve([])
}
  return (
    <React.Fragment>
      {/* <Modal /> */}
      <Header />
      <Scramble onGetScramble={getScramble}/>
      <Container sendTime={getTime} stats={solve} clearSession={clearLocalStorage} />
    </React.Fragment>
  )

}

export default App;
