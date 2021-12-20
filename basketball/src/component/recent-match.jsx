import React from 'react'
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"


function RecentMatches({teams}) {
    const style={fontSize: "2.5em",color:"black"}
   if(teams !== undefined ){
     console.log(teams)
    return (
        <div id="recentMatches">
        <div id="kobeBackground"></div>
        <div id="kobeImage"></div>
        <div id="matchStats">
          <button id="leftBtn">
              <FaChevronLeft style={style}/>
          </button>
          <button id="rightBtn">
              <FaChevronRight style={style}/>
          </button>
          <h1>{teams[0].full_name}</h1>
          <h2 style={{color:"white"}}>{Math.floor(Math.random()*100)}-{Math.floor(Math.random()*100)}</h2>
          <h1>{teams[1].full_name}</h1>
        </div>
      </div>
      );
}
      return <div >loading</div>
}
export default RecentMatches;