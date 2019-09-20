import React, { useEffect, useState } from "react";
import messenger from 'axios';
import CharacterCard from "./CharacterCard";
import tailored from 'styled-components';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charactersState, setCharacters] = useState([]);
  const CoolSection = tailored.section`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
  `;


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
    <CoolSection className="character-list">
      {
        charactersState.map(character =>
          <CharacterCard
            key={character.id}
            name={character.name}
            gender={character.gender}
            species={character.species}
            url={character.url}
          />
        )
      }
    </CoolSection>
  );
}
