
import './App.css';
import Header from "./components/header"

import React,{useState, useEffect} from 'react';
import Scramble from './components/scramble';
import Container from './components/container';
import ScrambleState from './context/ScrambleState';



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
  setBestAvg(10000000.00)
}


let lastFive=[];
let avg=0.0;
const [bestAvg,setBestAvg]=useState(10000000.00)
if(localStorage.getItem("bestAvg"!==null))
setBestAvg(localStorage.getItem("bestAvg"))
if(solve.length>=5)
{
    for(let i=solve.length-1;i>=solve.length-5;i--)
    lastFive.push(solve[i].time);
}

lastFive.sort()
if(lastFive.length)
{

for(let i=1;i<=3;i++)
{
    let stringTime=(lastFive[i].seconds).toString();

   stringTime= stringTime.concat(".");
   stringTime= stringTime.concat(lastFive[i].miliSeconds.toString());


    stringTime=parseFloat(stringTime);
    avg+=stringTime;

}
console.log(avg)
avg/=3
avg= Math.round((avg + Number.EPSILON) * 100) / 100
console.log(avg)


if(avg<bestAvg)
{
    setBestAvg(avg)
    localStorage.setItem("bestAvg",bestAvg);
}

}
console.log(bestAvg)

  return (
    <>
    <ScrambleState> 
      <Header />
      <Scramble onGetScramble={getScramble}/>
      <Container sendTime={getTime} stats={solve} clearSession={clearLocalStorage} currAvg={avg} bestAvg={bestAvg} />
    </ScrambleState>
    </> 
  )

}

export default App;
