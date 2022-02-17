import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function PokemonList({ pokemon }) {

    console.log({ pokemon })
  return (
    <div style={{display: 'flex'}}>
        <nav style={{padding: '1rem'}}>
            {pokemon.map(p => (
            <NavLink 
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : ""
                    };
                }}
                to={`/${p}`}
                key={p}>
                {p}
            </NavLink>
            ))}
        </nav>
        <Outlet />
    </div>
  )
}
