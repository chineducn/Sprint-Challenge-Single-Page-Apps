import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Axios from "axios";


export default function App() {

  const [charactersState, setCharacters] = useState([]);
  console.log(charactersState);

  useEffect(() => {

    Axios.get('https://rickandmortyapi.com/api/character')
      .then(yesPlease => {
        setCharacters(yesPlease.data.results);
      // debugger
      })
      .catch(hellNo => {
        
      })
    
    }
    , []
  );

  return (
    <main>
      <Header />
    </main>
  );
}
