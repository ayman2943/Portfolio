import React from 'react'

import RecentMatches from "./recent-match"
import Upcoming from './upcoming'


function Main({increaseCount,teams}) {

    return ( 
        <main>

     <div id="homePage">
       <div id="home-text">
         <div id="NBA-pic"></div>
         <h1>All about NBA</h1>
         <p>All the stats you need</p>
       </div>
     </div>


    <div id="statsMenu">

      <div className="StatsBox" id="playerStats" onClick={()=>increaseCount(1)}>
        <div className="statsLogo"></div>
        <div className="statsInfo">
          <h1>PlayerStats</h1>
          Know stats of all the players, compare them and choose your G.O.A.T.
        </div>
      </div>
      <div className="StatsBox" id="teamStats" onClick={()=>{increaseCount(2)}}>
        <div className="statsLogo"></div>
        <div className="statsInfo">
          <h1>TeamStats</h1>

          Know stats of all the teams, compare them and choose your favorites.
        </div>
      </div>
      <div className="StatsBox" id ="fixtureBox">
        <div className="statsLogo"></div>
        <div className="statsInfo">
          <h1>Fixtures</h1>

          Know upcoming fixtures and watch your favorite  team play.
        </div>
      </div>
    </div>

    
   <RecentMatches teams={teams}/>
   <Upcoming teams={teams}/>

   </main>

     );
}

export default Main;