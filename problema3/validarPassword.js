let input = document.getElementById('input')
let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let item4 = document.getElementById('item4')
let item5 = document.getElementById('item5')
let item6 = document.getElementById('item6')
let item7 = document.getElementById('item7')

input.addEventListener("keyup", function(){
    let password = input.value
    let letras = "abcdefghijklmnñopqrstuvwxyz"
    let numeros = [0,1,2,3,4,5,6,7,8,9];
    let tieneMinusculas;
    let tieneMayusculas;
    let esNumero;
    let numRepetido = false
    let letraRepetida = false
    let cantidadNumeros = [];

//Esta funcion comprueva si la password contiene 16 o mas caracteres

if(password.length < 16){
    item1.style.color="red";
}else{
    item1.style.color="green";
}

//Esta funcion Comprueva si la password contiene minúsculas

const encontrarMinusculas = ()=> {
    for (let index = 0; index < password.length; index++) {
        for (let j = 0; j < letras.length; j++) {
            if(password[index] === letras[j]) {
            return tieneMinusculas = true
            }
        }
    }
}
encontrarMinusculas()

//Esta funcion Comprueva si la password contiene mayúsculas

const encontrarMayusculas = ()=> {
    for (let index = 0; index < password.length; index++) {
        for (let j = 0; j < letras.length; j++) {
            if(password[index] === letras[j].toUpperCase()) {
            return tieneMayusculas = true
            }
        }
    }
}

encontrarMayusculas()

if(tieneMayusculas == true && tieneMinusculas == true){
    item2.style.color="green";
}else{
    item2.style.color="red";
}

//Esta funcion comprueva si hay numeros que se repiten consecutivamente la password


const numRepit = ()=>{

    for (let index = 0; index < password.length; index++) {
        for (let j = 0; j < numeros.length; j++) {
            if(password[index] == numeros[j] && password[index -1] === password[index]){
               return numRepetido = true             
            }
        }
    }
}

numRepit()

if(numRepetido ==true){
    item3.style.color="red";
}else{
    item3.style.color="green";
}

const strigRepit = ()=>{

    for (let index = 0; index < password.length; index++) {
        for (let j = 0; j < letras.length; j++) {
            if(password[index] === letras[j] && password[index -1] === password[index]){
               return letraRepetida = true             
            }
        }
    }
}

strigRepit()


if(letraRepetida == true){
    item4.style.color="red";
}else{
    item4.style.color="green"
}

for (let index = 0; index < password.length; index++) {
    for (let j = 0; j < numeros.length; j++) {
        if(password[index] == numeros[j]){
            cantidadNumeros.push(password[index])
        }
        
    }
}


if(cantidadNumeros.length >= 4){
    item5.style.color="green";
}else{
    item5.style.color="red";
}

for (let index = 0; index < password.length; index++) {
    const element = password[index];
    if(element === "0"){
        item6.style.color="red"
    }else{
        item6.style.color="green"
    }
}
    for (let index = 0; index < password.length; index++) {
        const element = password[index];
        if(element == " "){
            item7.style.color="red"
        }
    }

    
    const isNamber = ()=>{
        for (let index = 0; index < password.length; index++) {
            for (let j = 0; j < numeros.length; j++) {
                if(password[index] == numeros[j]){
                   return esNumero = true             
                }
            }
        }
    }
     isNamber()
     
});

