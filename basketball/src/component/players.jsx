
import React, { useState,useEffect } from 'react'
import Player from './player'
const url= 'https://nba-players.herokuapp.com/players-stats';

function Players() {
    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState([])


    const fetchPlayers = async ()=>{
        const response = await fetch(url)
        const newPlayers = await response.json()
        setPlayers(newPlayers)
        setLoading(false)
     
    
        
    }
    useEffect(() => {
        fetchPlayers()
   
    }, [])

    
    if(loading){
       return <div className ="loading">
           loading....
       </div>
    }
    
    function playersUpdate(){
        if(typeof players !== "undefined" && players !== null){
         return <Player players= {players} />
        }
    }

    return (
       <React.StrictMode>
           {playersUpdate()}
       </React.StrictMode>
     
    //  <div className="players">
    //      
    //  </div>
     
      );

}

export default Players;


// $(document).ready(function(){

// 	var playerStats = document.getElementById("playerStats")
// 	var main = document.querySelector('main')
//      $.ajax({
//           url: url,
//           dataType: 'json',
//           contentType: 'application/json' ,
//           cache:"false"
//      })
//           .done(function(results) {

// 			playerStats.addEventListener('click',function(){
            
// 				main.innerHTML =`   
// 				 <div id="playerStatsHome">
// 				<h1>Players</h1>
// 				<div id="playersBox">
			   
// 				</div>
// 			  </div>
// 			 </div>
// 		   `
// 		   var playersBox = document.getElementById("playersBox")
		 
		   		
// 			results.forEach(function(ob){
//             	let splittedName = ob.name.split(' ')
// 				let firstName = splittedName[0]
// 				let lastName =splittedName[splittedName.length-1]

// 			var playerImage = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`
//             // console.log(playerImage)


			
// 			var player = document.createElement("div")
// 			player.classList.add("player")
			

//                 // player.classList.add('active')
// 				player.innerHTML=`
// 				<div class="playerImage" style="background-image:url('${playerImage}')"></div>
// 				<div class="playerInfo">
// 				<div class="playerName">${ob.name}</div>
// 				<div class="playerTeam">${ob.team_name}</div>`
				

//             player.addEventListener("click",function(){
//         main.innerHTML=`
		
// 		<div id="singlePLayerHome">
// 		<div id="singlePLayerScreen">
	
// 		<div class="playerIntro">
// 		<div class="playerPic" style="background-image:url('${playerImage}')"></div>
// 		  <div class="NT">
// 		  <div class="playerTeam">${ob.team_name}</div>
// 		  <div class="playerName">${ob.name}</div>
// 		</div>
// 	  </div>
	
// 		<div id="utility">
// 		  <button id="compare">Compare</button>
// 		  <button id="favourite"><i class="fa fa-heart"></i>
// 		  Favorite</button>
// 		</div>
// 	  </div>
// 	  <div id="singlePlayerStats">
// 		<div class="tworow">ppg <p>${ob.points_per_game}</p></div>
// 		<div class="tworow">apg <p>${ob.assists_per_game}</p></div>
// 		<div class="tworow">rpg <p>${ob.rebounds_per_game}</p></div>
// 		<div class="tworow">per <p>${ob.player_efficiency_rating}</p></div>
// 		<div class="oneRow">ftp <p>${ob.free_throw_percentage}</p></div>
// 		<div class="oneRow">fgp <p>${ob.field_goal_percentage}</p></div>
// 		<div class="oneRow">bpg <p>${ob.blocks_per_game}</p></div>
// 		<div class="oneRow">spg <p>${ob.steals_per_game}</p></div>
// 		<div class="oneRow">tpg <p>${ob.turnovers_per_game}</p></div>
// 		<div class="oneRow">team name <p>${ob.team_acronym}</p></div>
	
	
// 	  </div>
// 	</div>`
// 			})
               

// 				if(playersBox){
// 					playersBox.append(player)
// 					}
// 		// const boxTop = player.getBoundingClientRect().top
// 		// if(trigger>boxTop){
// 		// 	player.classList.add('active')
// 		// }
// 		// else {
// 		// 	player.classList.remove('active')
// 		// }
		
// 			})
// 		})
			
			
//             console.log(results)
// 		// 	let name = results.map(a => a.name);
// 		// 	let playerTeam = results.map(a=>a.team_name)
// 		// 	console.log(playerTeam)
// 		// // 	let firstName = name.map(function (str){
//         // //          var arr= str.split(' ')
// 		// // 		 return arr[0]
// 		// // 	})
// 		// // 	let lastName = name.map(function (str){
// 		// // 		var arr= str.split(' ')
// 		// // 		return arr[arr.length-1]
// 		// //    })
// 		// name.forEach(element => {
// 		// 	var splittedNAme = element.split(' ') 
// 		// 	firstName= splittedNAme[0]
// 		// 	lastName = splittedNAme[1]
// 		// 	var playerImageUrl =`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`

// 		// 	console.log(playerImageUrl)
// 		// });
			
//           })
//           .fail(function(request,errorType, errorMessage){
//                alert(errorMessage)
//           })

		  
      
// })


