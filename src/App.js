import React, { useState, useEffect } from "react";
import PokemonList  from "./PokemonList";
import axios from "axios"
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemonUrl, setPokemonUrl] = useState()
  const [pokemonData, setPokemonData] = useState()

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl)
      .then(res => {
        setLoading(false)
        setPokemon(res.data.results.map(p => p.name))
        console.log(pokemon)
        setPokemonUrl(res.data.results[0].url)
        console.log(res.data.results[0].url)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
      })

      .catch(e => console.log(e))

  }, [currentPageUrl])

//   useEffect(async() => {
//     console.log(pokemonUrl)
//     await axios.get(pokemonUrl)
//         .then(res => {
//             setPokemonData(res.data)
//             console.log(pokemonData)
//             console.log(res.data.name)
//     })

//   .catch(e => console.log(e))

// }, [pokemonUrl])


  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }



  if (loading) return "Loading...";



  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      {/* {pokemonData ? <p>Here is name {pokemonData.name}</p> : "Loading..." } */}
      {/* <p>Here is name {pokemonData.name}</p> */}
      <Pokemon url={pokemonUrl} />
    </>
    
  );
}

export default App;
