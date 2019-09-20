import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import { Route, NavLink } from 'react-router-dom';
import tailored from 'styled-components';

const CoolNav = tailored.nav`
  display: flex;
  justify-content: space-around;
`

export default function App() {


  return (
    <main>
      <Header />
      <CoolNav>
        <NavLink to='/'>Welcome</NavLink>
        <NavLink to='/characters'>Characters</NavLink>        
      </CoolNav>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}