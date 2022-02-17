import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Pokemon() {
    let params = useParams();
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonAbility, setPokemonAbility] = useState([])
    const [pokemonImg, setPokemonImg] = useState()

    const name = params.pokemonName
    const urlP = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(async() => {
        console.log(name) 
       
        console.log(urlP)
        await axios.get(urlP)
            .then(res => {
                setPokemonData(res.data)
                setPokemonAbility(res.data.abilities.map(p => p.ability.name+" "))
                console.log(res.data)
                setPokemonImg(res.data.sprites.front_default)
        })
    
      .catch(e => console.log(e))
    
    }, [name])

    return (

      <main style={{ padding: "1rem" }}>
       {pokemonData ? (
           <div>
               <div>
                    <p>Name: {pokemonData.name}</p> 
                    <img src={pokemonImg} />
               </div>
               <div>
                    <p>Base experience: {pokemonData.base_experience}</p>
                    <p>Abilities: {pokemonAbility}</p>
               </div>
               

           </div>
           
       )
       : "Loading..." }
       
     </main>
    );
  }