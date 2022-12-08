import React from 'react'
import { useEffect, useState } from "react";

const PokemonTypes = () => {
    const [data, setData] = useState([]);
    const [suma, setSuma] = useState(6)
    const [tipo, setTipo] = useState("normal")

    const url = 'https://pokeapi.co/api/v2/type'

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.results))
    }, [url]);

    return (
        <div>
            {data.map((item, idx) => {
                return (
                    <button
                        className='btn'
                        value={item.name}
                        key={idx}
                        onClick={() => {
                            setSuma(item.name.length)
                            setTipo(item.name)
                        }}
                    >
                        {item.name}
                    </button>
                    
                
                )
            })}
            <p>En total existe <span>{suma}</span> pokemon del tipo <span>{tipo}</span></p>
        </div>
    )
}

export default PokemonTypes