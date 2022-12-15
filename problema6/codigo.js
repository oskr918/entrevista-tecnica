const input = document.getElementById('input')

input.addEventListener('change', (e)=>{
    idPokemon = e.target.value
    


const getPokemon = (idPokemon) => {
    let data =  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then((response) => response.json())
        .then((data) => crearPokemon(data))
}

getPokemon(idPokemon)

//Nombre, número, tipo, peso, altura y una imágen
const crearPokemon = (pokemon)=>{
    console.log(pokemon)
    console.log(pokemon.types[0].type.name)
    const card = document.getElementById('card')
    const parrafo = document.createElement('p')
    card.innerHTML = `<img src=${pokemon.sprites.other.dream_world.front_default} alt="pokemon">
    <h3>${pokemon.name}</h3>
    <p>numero: ${pokemon.id}</p> 
    <p>Altura: ${pokemon.height}</p>
    <p>tipo :${pokemon.types[0].type.name}</p>
    <p>peso :${pokemon.weight}</p> `

}

})