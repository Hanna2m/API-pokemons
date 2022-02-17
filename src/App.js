import React, { useState, useEffect } from "react";
import PokemonList  from "./PokemonList";
import axios from "axios"
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import './App.css';
import { Box } from "@mui/material";
import { width } from "@mui/system";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl)
      .then(res => {
        setLoading(false)
        setPokemons(res.data.results.map(p => p.name))
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
      })

      .catch(e => console.log(e))

  }, [currentPageUrl]);

  


  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }



  if (loading) return "Loading...";



  return (
    <>
      <header>
        <h1>Find your pokemon</h1>
      </header>
      <Box style={{
        paddingLeft: "100px",
        minwidth: "480px"}}>
        <PokemonList pokemon={pokemons} />
        <Pagination 
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      </Box>
      
    </>
    
  );
}

export default App;



