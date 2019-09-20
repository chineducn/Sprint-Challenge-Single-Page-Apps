import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Axios from "axios";


export default function App() {

  // const [charactersState, setCharacters] = useState([]);
  // console.log(charactersState);

  // const rickandmortyCharacterApi = 'https://rickandmortyapi.com/api/character';

  // useEffect(() => {

  //   Axios.get(rickandmortyCharacterApi)
  //     .then(yesPlease => {
  //       setCharacters(yesPlease.data.results);
  //       // debugger
  //     })
  //     .catch(hellNo => {

  //     })

  // }
  //   , []
  // );

  return (
    <main>
      <Header />
    </main>
  );
}
