import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import "./components/Character";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chrc, setChrc] = useState();

  const query = 'https://rickandmortyapi.com/api/character?page=1';

  useEffect(() =>{
    axios
    .get(query)
    .then((res) => {
      setChrc(res.data.results)
      console.log(res.data.results)
    })
    .catch((error) => console.log(error))
  }, []);
  //  console.log('DATA: ',chrc)
  return (
    <div className="App">
      {/* <Character data={chrc}/> */}
      {chrc.map((item) => (
        console.log(item)
        ))}
    </div>
  );
}

export default App;
