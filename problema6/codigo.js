let input = document.getElementById('input');
let buscar = document.getElementById('buscar');
let nombre = "";

let datos={
    tipo:"",
}
//nombre, numero tipo peso altura imagen
buscar.addEventListener('click', ()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response)=>response.json())
    .then((data)=> console.log(data))
})


input.addEventListener('change', (e)=>{
    nombre = e.target.value
})

