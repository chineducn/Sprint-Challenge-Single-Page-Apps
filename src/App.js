import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
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
  }
`

export default function App() {


  return (
    <main>
      <Header />
      <CoolNav>
        <NavLink className='pageLink' exact activeClassName='activePage' to='/'>Welcome</NavLink>
        <NavLink className='pageLink' activeClassName='activePage' to='/characters'>Characters</NavLink>
        <NavLink className='pageLink' activeClassName='activePage' to='/search'>Search Character</NavLink>
      </CoolNav>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/search' component={SearchForm} />
    </main>
  );
}