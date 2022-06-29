import React,{useContext} from "react";
import "../styles/visualScramble.css"
import scrambleContext from "../context/scrambleContext";


function VisualScramble() {
    const colors = new Map();
    colors["R"]="red"
    colors["W"]="white";
    colors["B"]="blue";
    colors["G"]="green";
    colors["Y"]="yellow";
    colors["O"]="orange";





        let topp = [
          ["W", "W", "W"],
          ["W", "W", "W"],
          ["W", "W", "W"],
        ];
        let front = [
          ["G", "G", "G"],
          ["G", "G", "G"],
          ["G", "G", "G"],
        ];
        let bottom = [
          ["Y", "Y", "Y"],
          ["Y", "Y", "Y"],
          ["Y", "Y", "Y"],
        ];
        let left = [
          ["O", "O", "O"],
          ["O", "O", "O"],
          ["O", "O", "O"],
        ];
        let right = [
          ["R", "R", "R"],
          ["R", "R", "R"],
          ["R", "R", "R"],
        ];
        let back = [
          ["B", "B", "B"],
          ["B", "B", "B"],
          ["B", "B", "B"],
        ];
        
        // cycle function is used for the sides that retain the pieces but the pieces are just rotated CW or CWC
        // example- when we do a R move, the stickers on the right face (Blue center side) are just rotated CW
        function cycle(side) {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
          if (side === "right") {
            tright[0][0] = right[2][0];
            tright[0][1] = right[1][0];
            tright[0][2] = right[0][0];
            tright[1][0] = right[2][1];
            tright[1][1] = right[1][1];
            tright[1][2] = right[0][1];
            tright[2][0] = right[2][2];
            tright[2][1] = right[1][2];
            tright[2][2] = right[0][2];
            for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
            for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
            for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
            for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
            for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
            for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
            return;
          }
          if (side === "left") {
            tleft[0][0] = left[2][0];
            tleft[0][1] = left[1][0];
            tleft[0][2] = left[0][0];
            tleft[1][0] = left[2][1];
            tleft[1][1] = left[1][1];
            tleft[1][2] = left[0][1];
            tleft[2][0] = left[2][2];
            tleft[2][1] = left[1][2];
            tleft[2][2] = left[0][2];
            for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
            for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
            for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
            for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
            for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
            for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
            return;
          }
          if (side === "up") {
            ttopp[0][0] = topp[2][0];
            ttopp[0][1] = topp[1][0];
            ttopp[0][2] = topp[0][0];
            ttopp[1][0] = topp[2][1];
            ttopp[1][1] = topp[1][1];
            ttopp[1][2] = topp[0][1];
            ttopp[2][0] = topp[2][2];
            ttopp[2][1] = topp[1][2];
            ttopp[2][2] = topp[0][2];
            for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
            for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
            for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
            for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
            for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
            for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
            return;
          }
          if (side === "front") {
            tfront[0][0] = front[2][0];
            tfront[0][1] = front[1][0];
            tfront[0][2] = front[0][0];
            tfront[1][0] = front[2][1];
            tfront[1][1] = front[1][1];
            tfront[1][2] = front[0][1];
            tfront[2][0] = front[2][2];
            tfront[2][1] = front[1][2];
            tfront[2][2] = front[0][2];
            for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
            for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
            for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
            for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
            for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
            for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
            return;
          }
          if (side === "back") {
            tback[0][0] = back[2][0];
            tback[0][1] = back[1][0];
            tback[0][2] = back[0][0];
            tback[1][0] = back[2][1];
            tback[1][1] = back[1][1];
            tback[1][2] = back[0][1];
            tback[2][0] = back[2][2];
            tback[2][1] = back[1][2];
            tback[2][2] = back[0][2];
            for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
            for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
            for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
            for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
            for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
            for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
            return;
          }
          if (side === "down") {
            tbottom[0][0] = bottom[2][0];
            tbottom[0][1] = bottom[1][0];
            tbottom[0][2] = bottom[0][0];
            tbottom[1][0] = bottom[2][1];
            tbottom[1][1] = bottom[1][1];
            tbottom[1][2] = bottom[0][1];
            tbottom[2][0] = bottom[2][2];
            tbottom[2][1] = bottom[1][2];
            tbottom[2][2] = bottom[0][2];
            for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
            for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
            for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
            for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
            for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
            for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
            return;
          }
        }
      
        function r() {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
      
          ttopp[0][2] = front[0][2];
          ttopp[1][2] = front[1][2];
          ttopp[2][2] = front[2][2];
          tfront[0][2] = bottom[0][2];
          tfront[1][2] = bottom[1][2];
          tfront[2][2] = bottom[2][2];
          tbottom[0][2] = back[2][0];
          tbottom[1][2] = back[1][0];
          tbottom[2][2] = back[0][0];
          tback[0][0] = topp[2][2];
          tback[1][0] = topp[1][2];
          tback[2][0] = topp[0][2];
          for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
          for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
          for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
          for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
          for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
          for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
          cycle("right");
          return;
        }
      
        function l() {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
      
          ttopp[0][0] = back[2][2];
          ttopp[1][0] = back[1][2];
          ttopp[2][0] = back[0][2];
          tfront[0][0] = topp[0][0];
          tfront[1][0] = topp[1][0];
          tfront[2][0] = topp[2][0];
          tbottom[0][0] = front[0][0];
          tbottom[1][0] = front[1][0];
          tbottom[2][0] = front[2][0];
          tback[0][2] = bottom[2][0];
          tback[1][2] = bottom[1][0];
          tback[2][2] = bottom[0][0];
          for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
          for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
          for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
          for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
          for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
          for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
          cycle("left");
          return;
        }
        function u() {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
      
          tfront[0][0] = right[0][0];
          tfront[0][1] = right[0][1];
          tfront[0][2] = right[0][2];
          tleft[0][0] = front[0][0];
          tleft[0][1] = front[0][1];
          tleft[0][2] = front[0][2];
          tright[0][0] = back[0][0];
          tright[0][1] = back[0][1];
          tright[0][2] = back[0][2];
          tback[0][0] = left[0][0];
          tback[0][1] = left[0][1];
          tback[0][2] = left[0][2];
      
          for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
          for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
          for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
          for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
          for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
          for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
          cycle("up");
          return;
        }
      
        function f() {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
      
          ttopp[2][0] = left[2][2];
          ttopp[2][1] = left[1][2];
          ttopp[2][2] = left[0][2];
      
          tright[0][0] = topp[2][0];
          tright[1][0] = topp[2][1];
          tright[2][0] = topp[2][2];
      
          tbottom[0][0] = right[2][0];
          tbottom[0][1] = right[1][0];
          tbottom[0][2] = right[0][0];
      
          tleft[0][2] = bottom[0][0];
          tleft[1][2] = bottom[0][1];
          tleft[2][2] = bottom[0][2];
      
          for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
          for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
          for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
          for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
          for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
          for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
          cycle("front");
          return;
        }
        function b() {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
      
          ttopp[0][0] = right[0][2];
          ttopp[0][1] = right[1][2];
          ttopp[0][2] = right[2][2];
      
          tright[0][2] = bottom[2][2];
          tright[1][2] = bottom[2][1];
          tright[2][2] = bottom[2][0];
      
          tbottom[2][0] = left[0][0];
          tbottom[2][1] = left[1][0];
          tbottom[2][2] = left[2][0];
      
          tleft[0][0] = topp[0][2];
          tleft[1][0] = topp[0][1];
          tleft[2][0] = topp[0][0];
      
          for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
          for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
          for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
          for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
          for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
          for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
          cycle("back");
          return;
        }
        function d() {
          let ttopp = [];
          let tfront = [];
          let tbottom = [];
          let tleft = [];
          let tright = [];
          let tback = [];
      
          for (let i = 0; i < topp.length; i++) ttopp[i] = topp[i].slice();
          for (let i = 0; i < front.length; i++) tfront[i] = front[i].slice();
          for (let i = 0; i < bottom.length; i++) tbottom[i] = bottom[i].slice();
          for (let i = 0; i < back.length; i++) tback[i] = back[i].slice();
          for (let i = 0; i < left.length; i++) tleft[i] = left[i].slice();
          for (let i = 0; i < right.length; i++) tright[i] = right[i].slice();
      
          tright[2][0] = front[2][0];
          tright[2][1] = front[2][1];
          tright[2][2] = front[2][2];
      
          tfront[2][0] = left[2][0];
          tfront[2][1] = left[2][1];
          tfront[2][2] = left[2][2];
      
          tleft[2][0] = back[2][0];
          tleft[2][1] = back[2][1];
          tleft[2][2] = back[2][2];
      
          tback[2][0] = right[2][0];
          tback[2][1] = right[2][1];
          tback[2][2] = right[2][2];
      
          for (let i = 0; i < topp.length; i++) topp[i] = ttopp[i].slice();
          for (let i = 0; i < front.length; i++) front[i] = tfront[i].slice();
          for (let i = 0; i < bottom.length; i++) bottom[i] = tbottom[i].slice();
          for (let i = 0; i < back.length; i++) back[i] = tback[i].slice();
          for (let i = 0; i < left.length; i++) left[i] = tleft[i].slice();
          for (let i = 0; i < right.length; i++) right[i] = tright[i].slice();
          cycle("down");
          return;
        }
    
    let notations = [];

  notations.push("R");
  notations.push("R'");
  notations.push("L");
  notations.push("L'");
  notations.push("U");
  notations.push("U'");
  notations.push("F");
  notations.push("F'");
  notations.push("D");
  notations.push("D'");
  notations.push("B");
  notations.push("B'");
  notations.push("R2");
  notations.push("L2");
  notations.push("U2");
  notations.push("F2");
  notations.push("D2");
  notations.push("B2");

  let scarmble=useContext(scrambleContext)
  console.log(scarmble.scarmble)
  scarmble=scarmble.scarmble

  for (let i = 0; i < scarmble.length; i++) {
    if (scarmble[i].length === 1) {
      if (scarmble[i][0] == "B") {
        b();
        continue;
      }
      if (scarmble[i][0] == "R") {
        r();
        continue;
      }
      if (scarmble[i][0] == "L") {
        l();
        continue;
      }
      if (scarmble[i][0] == "F") {
        f();
        continue;
      }
      if (scarmble[i][0] == "U") {
        u();
        continue;
      }
      if (scarmble[i][0] == "D") {
        d();
        continue;
      }
    } else {
      if (scarmble[i][1] == "2") {
        if (scarmble[i][0] == "B") {
          b();
          b();
          continue;
        }
        if (scarmble[i][0] == "R") {
          r();
          r();
          continue;
        }
        if (scarmble[i][0] == "L") {
          l();
          l();
          continue;
        }
        if (scarmble[i][0] == "F") {
          f();
          f();
          continue;
        }
        if (scarmble[i][0] == "U") {
          u();
          u();
          continue;
        }
        if (scarmble[i][0] == "D") {
          d();
          d();
          continue;
        }
      } else {
        if (scarmble[i][0] == "B") {
          b();
          b();
          b();
          continue;
        }
        if (scarmble[i][0] == "R") {
          r();
          r();
          r();
          continue;
        }
        if (scarmble[i][0] == "L") {
          l();
          l();
          l();
          continue;
        }
        if (scarmble[i][0] == "F") {
          f();
          f();
          f();
          continue;
        }
        if (scarmble[i][0] == "U") {
          u();
          u();
          u();
          continue;
        }
        if (scarmble[i][0] == "D") {
          d();
          d();
          d();
          continue;
        }
      }
    }
  }

  let s = "";
  s = scarmble.join(" ");

  return (
    <div className="container" id="boxx">
      <div className="cube">
        <div className="row mb-2">
            <div className="col-sm-12 d-flex flex-row">
        <div className="orange m-1">
            <div className="upper">
              <div className="dummy"></div>
              <div className="dummy"></div>
              <div className="dummy"></div>
            </div>
            <div className="middle">
              <div className="dummy"></div>
              <div className="dummy"></div>
              <div className="dummy"></div>
            </div>
            <div className="lower">
              <div className="dummy"></div>
              <div className="dummy"></div>
              <div className="dummy"></div>
            </div>
          </div>

          <div className="orange m-1">
            <div className="upper">
              <div className="layer1" id="w00" style={{backgroundColor:colors[topp[0][0]]}}></div>
              <div className="layer1" id="w01" style={{backgroundColor:colors[topp[0][1]]}}></div>
              <div className="layer1" id="w02" style={{backgroundColor:colors[topp[0][2]]}}></div>
            </div>
            <div className="middle">
              <div className="layer2" id="w10" style={{backgroundColor:colors[topp[1][0]]}}></div>
              <div className="layer2" id="w11" style={{backgroundColor:colors[topp[1][1]]}}></div>
              <div className="layer2" id="w12" style={{backgroundColor:colors[topp[1][2]]}}></div>
            </div>
            <div className="lower">
              <div className="layer3" id="w20" style={{backgroundColor:colors[topp[2][0]]}}></div>
              <div className="layer3" id="w21" style={{backgroundColor:colors[topp[2][1]]}}></div>
              <div className="layer3" id="w22" style={{backgroundColor:colors[topp[2][2]]}}></div>
            </div>
          </div>
          </div>
        </div>
        <div className="row mb-2 " >
          <div className="col-12 d-flex flex-row justify-content-start">
            <div className="orange m-1">
              <div className="upper">
                <div className="layer1" id="l00" style={{backgroundColor:colors[left[0][0]]}}></div>
                <div className="layer1" id="l01" style={{backgroundColor:colors[left[0][1]]}}></div>
                <div className="layer1" id="l02" style={{backgroundColor:colors[left[0][2]]}}></div>
              </div>
              <div className="middle">
                <div className="layer2" id="l10" style={{backgroundColor:colors[left[1][0]]}}></div>
                <div className="layer2" id="l11" style={{backgroundColor:colors[left[1][1]]}}></div>
                <div className="layer2" id="l12" style={{backgroundColor:colors[left[1][2]]}}></div>
              </div>
              <div className="lower">
                <div className="layer3" id="l20" style={{backgroundColor:colors[left[2][0]]}}></div>
                <div className="layer3" id="l21" style={{backgroundColor:colors[left[2][1]]}}></div>
                <div className="layer3" id="l22" style={{backgroundColor:colors[left[2][2]]}}></div>
              </div>
            </div>
            <div className="green m-1">
              <div className="upper">
                <div className="layer1" id="f00" style={{backgroundColor:colors[front[0][0]]}}></div>
                <div className="layer1" id="f01"  style={{backgroundColor:colors[front[0][1]]}}></div>
                <div className="layer1" id="f02" style={{backgroundColor:colors[front[0][2]]}}></div>
              </div>
              <div className="middle">
                <div className="layer2" id="f10" style={{backgroundColor:colors[front[1][0]]}}></div>
                <div className="layer2" id="f11" style={{backgroundColor:colors[front[1][1]]}}></div>
                <div className="layer2" id="f12" style={{backgroundColor:colors[front[1][2]]}}></div>
              </div>
              <div className="lower">
                <div className="layer3" id="f20" style={{backgroundColor:colors[front[2][0]]}}></div>
                <div className="layer3" id="f21" style={{backgroundColor:colors[front[2][1]]}}></div>
                <div className="layer3" id="f22" style={{backgroundColor:colors[front[2][2]]}}></div>
              </div>
            </div>
            <div className="red m-1">
              <div className="upper">
                <div className="layer1" id="r00" style={{backgroundColor:colors[right[0][0]]}}></div>
                <div className="layer1" id="r01" style={{backgroundColor:colors[right[0][1]]}}></div>
                <div className="layer1" id="r02" style={{backgroundColor:colors[right[0][2]]}}></div>
              </div>
              <div className="middle">
                <div className="layer2" id="r10" style={{backgroundColor:colors[right[1][0]]}}></div>
                <div className="layer2" id="r11" style={{backgroundColor:colors[right[1][1]]}}></div>
                <div className="layer2" id="r12" style={{backgroundColor:colors[right[1][2]]}}></div>
              </div>
              <div className="lower">
                <div className="layer3" id="r20" style={{backgroundColor:colors[right[2][0]]}}></div>
                <div className="layer3" id="r21" style={{backgroundColor:colors[right[2][1]]}}></div>
                <div className="layer3" id="r22" style={{backgroundColor:colors[right[2][2]]}}></div>
              </div>
            </div>
            <div className="blue m-1">
              <div className="upper">
                <div className="layer1" id="b00" style={{backgroundColor:colors[back[0][0]]}}></div>
                <div className="layer1" id="b01" style={{backgroundColor:colors[back[0][1]]}}></div>
                <div className="layer1" id="b02" style={{backgroundColor:colors[back[0][2]]}}></div>
              </div>
              <div className="middle">
                <div className="layer2" id="b10" style={{backgroundColor:colors[back[1][0]]}}></div>
                <div className="layer2" id="b11" style={{backgroundColor:colors[back[1][1]]}}></div>
                <div className="layer2" id="b12" style={{backgroundColor:colors[back[1][2]]}}></div>
              </div>
              <div className="lower">
                <div className="layer3" id="b20" style={{backgroundColor:colors[back[2][0]]}}></div>
                <div className="layer3" id="b21" style={{backgroundColor:colors[back[2][1]]}}></div>
                <div className="layer3" id="b22" style={{backgroundColor:colors[back[2][2]]}}></div>
              </div>
            </div>
          </div>



        </div>
        <div className="row">

          <div className="col-12 d-flex flex-row m-1">
          <div className="orange m-1">
            <div className="upper">
              <div className="dummy"></div>
              <div className="dummy"></div>
              <div className="dummy"></div>
            </div>
            <div className="middle">
              <div className="dummy"></div>
              <div className="dummy"></div>
              <div className="dummy"></div>
            </div>
            <div className="lower">
              <div className="dummy"></div>
              <div className="dummy"></div>
              <div className="dummy"></div>
            </div>
          </div>
            <div className="yellow">
              <div className="upper">
                <div className="layer1" id="bt00" style={{backgroundColor:colors[bottom[0][0]]}}></div>
                <div className="layer1" id="bt01" style={{backgroundColor:colors[bottom[0][1]]}}></div>
                <div className="layer1" id="bt02" style={{backgroundColor:colors[bottom[0][2]]}}></div>
              </div>
              <div className="middle">
                <div className="layer2" id="bt10" style={{backgroundColor:colors[bottom[1][0]]}}></div>
                <div className="layer2" id="bt11" style={{backgroundColor:colors[bottom[1][1]]}}></div>
                <div className="layer2" id="bt12" style={{backgroundColor:colors[bottom[1][2]]}}></div>
              </div>
              <div className="lower">
                <div className="layer3" id="bt20" style={{backgroundColor:colors[bottom[2][0]]}}></div>
                <div className="layer3" id="bt21" style={{backgroundColor:colors[bottom[2][1]]}}></div>
                <div className="layer3" id="bt22" style={{backgroundColor:colors[bottom[2][2]]}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualScramble;
