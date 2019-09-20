import React, { useEffect, useState } from "react";
import messenger from 'axios';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charactersState, setCharacters] = useState([]);
  console.log(charactersState);

  const rickandmortyCharacterApi = 'https://rickandmortyapi.com/api/character';
    
  useEffect(() => {

    messenger.get(rickandmortyCharacterApi)
      .then(yesPlease => {
        setCharacters(yesPlease.data.results);
        // debugger
      })
      .catch(hellNo => {

      })

  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
