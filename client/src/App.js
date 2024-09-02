import { useState } from "react";
import './App.css';

function App() {

  let [actors,setActors] = useState([]);

  let getActorsFromServer = async ()=>{
  let reqOptions={
      method:"GET",
    };

    let JSONData = await fetch ("http://localhost:1234/Actors",reqOptions);

    let JSOData = await JSONData.json();

    setActors(JSOData);
    console.log(JSOData);

  };

 
  return (
    <div className="App">
     <button onClick={()=>{
      getActorsFromServer();
     }}>Actors</button>
     {actors.map((ele,i)=>{
      return <h2 key={i}>{ele}</h2> 
     })}
    </div>
  );
}

export default App;
