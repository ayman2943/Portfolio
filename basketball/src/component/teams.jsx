import React from 'react'

function Teams({teams}) {

    return ( 

        <div className="teamBox">
            {teams.map((team)=>{
             return   <div className ="perTeamBox" key={team.name}>
                <h1 className="TeamName">{team.name}</h1>
                <div className="TeamFullName">{team.full_name}</div>
                <div className="TeamAbbreviation">{team.abbreviation}</div>
                <div className="TeamCity">{team.city}</div>
                <div className="TeamConference">{team.conference}</div>
                <div className="TeamDivision">{team.division}</div>

                </div>
            })}
        </div>
     );
}

export default Teams;