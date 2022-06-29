import React from "react";
import ScrambleContext from "./scrambleContext";

const ScrambleState= (props)=>{
    let notations = [];
    let scarmble = [];
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
  
    for (let i = 0; i < 23; i++) {
      let temp = Math.floor(Math.random() * 18);
      if (i == 0) {
        scarmble.push(notations[temp]);
        continue;
      }
      if (scarmble[i - 1][0] != notations[temp][0]) {
        if (i == 1) {
          scarmble.push(notations[temp]);
  
          continue;
        }
  
        if (
          (scarmble[i - 2][0] == "R" || scarmble[i - 2][0] == "L") &&
          (scarmble[i - 1][0] == "R" || scarmble[i - 1][0] == "L") &&
          (notations[temp][0] == "R" || notations[temp][0] == "L")
        ) {
          i--;
          continue;
        }
  
        if (
          (scarmble[i - 2][0] == "U" || scarmble[i - 2][0] == "D") &&
          (scarmble[i - 1][0] == "U" || scarmble[i - 1][0] == "D") &&
          (notations[temp][0] == "U" || notations[temp][0] == "D")
        ) {
          i--;
          continue;
        }
  
        if (
          (scarmble[i - 2][0] == "F" || scarmble[i - 2][0] == "B") &&
          (scarmble[i - 1][0] == "F" || scarmble[i - 1][0] == "B") &&
          (notations[temp][0] == "F" || notations[temp][0] == "B")
        ) {
          i--;
          continue;
        } else scarmble.push(notations[temp]);
      } else i--; // to ensure that no element of the array is unfiled
    }
    let f_scramble=[];
    f_scramble.push(scarmble.join(" "));

    const finalScarmble={
        scarmble:scarmble
    }
    return(
        <ScrambleContext.Provider value={finalScarmble}>
            {props.children}
        </ScrambleContext.Provider>
    )

}


export default ScrambleState