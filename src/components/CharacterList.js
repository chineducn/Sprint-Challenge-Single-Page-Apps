import React, { useEffect, useState } from "react";
import messenger from 'axios';
import CharacterCard from "./CharacterCard";
import tailored from 'styled-components';
import SearchForm from './SearchForm';
import { Formik } from 'formik';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charactersState, setCharacters] = useState([]);
  const [searchState, setSearch] = useState();
  const initialSearch = '';

  const performSearch = (formValues, actions) => {
    console.log(formValues)
    setCharacters(charactersState.filter(character => character.name === formValues.name))
    actions.resetForm();
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
      />
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
    </>
  );
}
