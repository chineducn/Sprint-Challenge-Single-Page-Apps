import React from "react";
import tailored from 'styled-components';

const CoolSection = tailored.section`
  header {
    div {
      margin: 0 auto;
      width: 20rem
      img {
        width: 100%;
      }
    }
  }
`

export default function WelcomePage() {
  return (
    <CoolSection className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>        
      </header>
    </CoolSection>
  );
}
