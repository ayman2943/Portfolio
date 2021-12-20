import React, { useState,useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Upcoming({ teams }) {
  const style = { fontSize: "2.5em", color: "black", padding: "5px" };
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);


  function shift() {
    
     var nextTeam = document.querySelectorAll(".nextTeam")
    
     nextTeam.forEach((c)=>{
       if (count<=1 && count>=-1) {
         console.log(count)
        c.style.transform = `translateX(${count * 300}px)`;
       }
     
    })

    }
     useEffect(() => {
       shift()
     })




  if (teams !== undefined) {
    return (
      <div id="nextMatches">
        <div id="lebronImage"></div>
        <h1>upcoming matches</h1>
        <div id="nextTeams">
          <button className="leftBtn">
            <FaChevronLeft style={style} onClick={()=>{
              if(count<1)
                setCount(count+1)
                }}/>
          </button>
          <button className="rightBtn">
            <FaChevronRight style={style} onClick={()=>{
              if(count>-1)
              setCount(count-1)}}/>
          </button>

          <div className="nextTeam">
            <h1>{teams[index + 2].name}</h1>
            <h3>vs</h3>
            <h1>{teams[index + 3].name}</h1>
            <p>april 12th, 1999</p>
          </div>

          <div className="nextTeam">
            <h1>{teams[index + 4].name}</h1>
            <h3>vs</h3>
            <h1>{teams[index + 5].name}</h1>
            <p>april 12th, 1999</p>
          </div>
          <div className="nextTeam">
            <h1>{teams[index + 6].name}</h1>
            <h3>vs</h3>
            <h1>{teams[index + 7].name}</h1>
            <p>april 12th, 1999</p>
          </div>
          <div className="nextTeam">
            <h1>{teams[index + 8].name}</h1>
            <h3>vs</h3>
            <h1>{teams[index + 9].name}</h1>
            <p>april 12th, 1999</p>
          </div>
          <div className="nextTeam">
            <h1>{teams[index + 10].name}</h1>
            <h3>vs</h3>
            <h1>{teams[index + 11].name}</h1>
            <p>april 12th, 1999</p>
          </div>
        </div>
      </div>
    );
  }
  return <div> loading</div>;
}
export default Upcoming;
