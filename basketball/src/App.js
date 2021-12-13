import React,{ useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/navbar";
import Main from "./component/main";
import Footer from "./component/footer";
import Players  from "./component/players";
import Teams from "./component/teams";
// import PlayerDescription  from "./component/playerDescription";
function App() {
  const [count,setCount]= useState(0)
  const [content,setContent]= useState(<Main increaseCount={increaseCount}/>)
  const [teams, setTeams] = useState([])
  const [loading, setLoading]= useState(true)

  const fetchTeams = async ()=>{
  const response = await fetch("https://www.balldontlie.io/api/v1/teams")
  const newTeams = await response.json();
  setTeams(newTeams.data)
  setLoading(false)
  
  }
useEffect(() => {
  fetchTeams()

}, [])
  
  function increaseCount(x){
    setCount(count+ x) 
    console.log(count)   
  }



  useEffect(() => {
    // count=== 0 && <Main/> || count===1 && <Players/>
    if(!loading){
    if(count=== 0){setContent(<Main increaseCount={increaseCount} teams={teams}/>)}
    else if(count === 1){setContent(<Players increaseCount={increaseCount} teams={teams}/>)}
    else if (count===2){setContent(<Teams increaseCount={increaseCount} teams={teams}/>)}
    }
  },[count,loading])


  return (
    <div className="App">
      <Header />
      {content}
      <Footer/>
    </div>
  );
}

export default App;
