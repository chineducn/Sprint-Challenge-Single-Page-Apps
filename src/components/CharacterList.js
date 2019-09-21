import React, { useEffect, useState } from "react";
import messenger from 'axios';
import CharacterCard from "./CharacterCard";
import tailored from 'styled-components';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const initialSearch = '';
  const [charactersState, setCharacters] = useState([]);
  const [searchResultState, setResult] = useState([]);
  const [formState, setForm] = useState(initialSearch);
  

  const performSearch = () => {
    const resultsClone = [...charactersState];
    console.log(resultsClone);
    // setResult(resultsClone);
    setResult(resultsClone.filter(character => character.name.toLowerCase().includes(formState.toLowerCase())));
    setForm(initialSearch);
  }

  const onChange = evt => {
    
    setForm(evt.target.value);
  }

  const revealAll = (e) => {
    e.preventDefault();
    setResult(charactersState);
  }

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
        setResult(yesPlease.data.results);
        // debugger
      })
      .catch(hellNo => {

      })

  }, []);

  return (
    <>
      <SearchForm
        initialValues={initialSearch}
        onSubmit={performSearch}
        inputValue={formState}
        onChange={onChange}
        clickMe={revealAll}
      />      
      <CoolSection className="character-list">
        {
          searchResultState.map(character =>
            <CharacterCard
              image={character.image}
              key={character.id}
              name={character.name}
              gender={character.gender}
              species={character.species}
              url={character.url}
            />
          )
        }
      </CoolSection>
    </>
  );
}
