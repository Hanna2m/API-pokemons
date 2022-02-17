import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


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

      <Card sx={{ maxWidth: 345 }} 
            style={{
                display: "flex", 
                maxHeight: "400px", 
                alignContent: "center", 
                margin: "40px"}}>
       {pokemonData ? (
           <div>
               <CardMedia
                component="img"
                height="245"
                image={pokemonImg}
                alt="pokemon image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
                    {pokemonData.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Abilities: {pokemonAbility}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Base experience: {pokemonData.base_experience}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Height: {pokemonData.height}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Weight: {pokemonData.weight}
                    </Typography>
                </CardContent>
           </div>
           
       )
       : "Loading..." }
       
     </Card>
    );
  }