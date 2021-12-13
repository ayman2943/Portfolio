import React,{ useState} from 'react';
import PlayerDescription from './playerDescription'
function PLayer({players}) {
     const [count,setCount]= useState(0);
     const [player,setPlayer]= useState([])
     function increaseCount(){
          setCount(count+1)
          if(count>1){
               setCount(0)
          }
     }
     if(count===1){
          return <PlayerDescription player={player} increaseCount={increaseCount}/>
     }
    return (	
         <React.StrictMode>       
          <div id="playerStatsHome">
        <h1>Players</h1>
        <div id="playersBox">

                     {players.map((player)=>{
                 
                let splittedName = player.name.split(' ')
     			let firstName = splittedName[0]
    			let lastName =splittedName[splittedName.length-1]

    			var playerImage = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`
               player.Image = playerImage;
            return ( 
                <React.StrictMode key={player.name}>
                 <div className="player" onClick={()=>{
                 increaseCount();
                 setPlayer(player)
                 }} >
            <div className="playerImage" style={{backgroundImage:`url(${player.Image})`}}></div>
                 <div className="playerInfo">
                 <div className="playerName">{player.name}</div>
                 <div className="playerTeam">{player.team_acronym}</div>
                 </div>
                 </div>
                 </React.StrictMode>
                 ) 
          })}
       
        </div>
      </div>
         </React.StrictMode>
      );
     

}

export default PLayer;


