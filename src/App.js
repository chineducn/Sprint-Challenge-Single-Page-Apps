import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import { Route, NavLink } from 'react-router-dom';
import tailored from 'styled-components';


const CoolNav = tailored.nav`
  display: flex;
  justify-content: space-around;

  .pageLink {
    color: orange;
    text-decoration: none;
  }

  .activePage {
    color: red;
    font-style: italic;
    text-decoration: underline;   
  }
`

export default function App() {


  return (
    <main>
      <Header />
      <CoolNav>
        <NavLink className='pageLink' exact activeClassName='activePage' to='/'>Welcome</NavLink>
        <NavLink className='pageLink' activeClassName='activePage' to='/characters'>Characters</NavLink>
      </CoolNav>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/search' render={props => {
       
      }} />
    </main>
  );
}