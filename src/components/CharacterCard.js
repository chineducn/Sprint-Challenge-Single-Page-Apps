import React from "react";
import tailored from 'styled-components';

export default function CharacterCard(props) {

  const { name, gender, species, url } = props;

  return (
    <div>
      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{url}</p>
    </div>);
}
