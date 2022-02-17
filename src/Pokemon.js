import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Pokemon({url}) {
    let params = useParams();
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonAbility, setPokemonAbility] = useState([])
    const [pokemonImg, setPokemonImg] = useState()

    
    useEffect(async() => {
        console.log(url)
        await axios.get(url)
            .then(res => {
                setPokemonData(res.data)
                setPokemonAbility(res.data.abilities.map(p => p.ability.name+" "))
                console.log(res.data)
                setPokemonImg(res.data.sprites.front_default)
        })
    
      .catch(e => console.log(e))
    
    }, [url])



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
        {/* <p>base_experience: {pokemonData.base_experience}</p> */}
       
     </main>
    );
  }