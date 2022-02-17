import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Pokemon from "./Pokemon"
import PokemonList from './PokemonList';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path=":pokemonName" element={<Pokemon />} />
     </Route> 

  </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

