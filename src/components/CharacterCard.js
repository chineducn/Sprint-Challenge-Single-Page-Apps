import React from "react";
import tailored from 'styled-components';

export default function CharacterCard(props) {

  const { name, gender, species, url, image } = props;
  const CoolDiv = tailored.div`
    border: 0.1rem solid;
    margin: 0.2rem;
    padding: 0.2rem;

    p {
      font-size: 1rem;
      span {
        font-weight: bold;
        font-size: 0.75rem;        
      }
    }

    #link {
      font-size: 0.75rem;
    }
  `

  return (
    <CoolDiv>
      <div>
        <img src={image} alt=""/>
      </div>
      <p><span>Name:</span> {name}</p>
      <p><span>Gender:</span> {gender}</p>
      <p><span>Species:</span> {species}</p>
      <p id='link'><span>Link:</span> {url}</p>
    </CoolDiv>);
}
