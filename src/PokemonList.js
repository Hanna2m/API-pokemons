import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function PokemonList({ pokemon }) {

    console.log({ pokemon })
  return (
    <div style={{display: 'flex'}}>
        <nav style={{padding: '1rem'}}>
            {pokemon.map(p => (
            <NavLink 
                style={
                    ({ isActive }) => {
                    return {
                        display: "block",
                        marginTop: "0.6rem",
                        textDecorationLine: "none",
                        color: isActive ? "#61C87B" : ""
                    };
                   
                }}
                to={`/${p}`}
                key={p}>
                <Typography variant="body1" sx={{ fontWeight: 'bold'}}>
                   {p} 
                </Typography>
            </NavLink>
            ))}
        </nav>
        <Outlet />
    </div>
  )
}