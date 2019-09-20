import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import Axios from "axios";


export default function App() {

  
  return (
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}