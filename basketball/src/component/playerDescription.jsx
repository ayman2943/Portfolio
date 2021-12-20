import React from 'react'


function PlayerDescription({player,increaseCount}) {
    console.log(player)
    return (  
        <React.StrictMode>
          	<div id="singlePLayerHome">
 		<div id="singlePLayerScreen">
	
 		<div className="playerIntro">
 		<div className="playerPic" style={{ backgroundImage :`url(${player.Image})`}} onClick={()=>{increaseCount()}}></div>
 		  <div className="NT">
 		  <div className="playerTeam">{player.team_name}</div>
 		  <div className="playerName">{player.name}</div>
 		</div>
 	  </div>
	
 		<div id="utility">
 		  <button id="compare">Compare</button>
 		  <button id="favourite"><i className="fa fa-heart"></i>
 		  Favorite</button>
 		</div>
 	  </div>
 	  <div id="singlePlayerStats">
 		<div className="tworow">ppg <p>{player.points_per_game}</p></div>
 		<div className="tworow">apg <p>{player.assists_per_game}</p></div>
 		<div className="tworow">rpg <p>{player.rebounds_per_game}</p></div>
 		<div className="tworow">per <p>{player.player_efficiency_rating}</p></div>
 		<div className="oneRow">ftp <p>{player.free_throw_percentage}</p></div>
 		<div className="oneRow">fgp <p>{player.field_goal_percentage}</p></div>
 		<div className="oneRow">bpg <p>{player.blocks_per_game}</p></div>
 		<div className="oneRow">spg <p>{player.steals_per_game}</p></div>
 		<div className="oneRow">tpg <p>{player.turnovers_per_game}</p></div>
 		<div className="oneRow">team name <p>{player.team_acronym}</p></div>
	
	
 	  </div>
	</div>
    </React.StrictMode>
    )
 			
}

		  
      
 

export default PlayerDescription;	
