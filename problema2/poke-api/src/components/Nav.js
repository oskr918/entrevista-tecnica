import React from 'react'
import pokeapi_logo from '../img/pokeapi_logo.png'
const Nav = () => {
    return (
        <div className='nav'>
            <img src={pokeapi_logo} alt='imag-pokemon'></img>
            <h2>HOME</h2>
        </div>
    )
}

export default Nav