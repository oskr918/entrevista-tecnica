import { useEffect, useState } from "react";

const Search = () => {

  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState("")

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`


  const grtPokemon = () => {

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))      

  }

  return (
    <>
    <p>Ej: ditto, charmander, squirtle, caterpie</p>
    <div className='search'>
      <input onChange={(e) => {setPokemon(e.target.value) }} placeholder='Search pokemon' ></input>
      <button onClick={grtPokemon} className='search' >Search</button>
    </div>
    <p>El numero del pokemon <span>{pokemon}</span> es : <span>{data.id}</span></p>
    </>
  )
}

export default Search