
//funcion
/*
function suma(a,b){
    return a+b;
}


//funcion fatArrow
const suma= (a,b)=>{
    return a+b
}


// fat Arrow simplificada

const suma= (a,b)=> a+b



console.log(suma(2,3));




const usuario={
    nombre:'ivan',
    apellidoP: 'guerra',
    edad: 36,
    direccion:{
        pais:'Mexico',
        cuidad:'Qro',
        calle:'la misma 123'
    },
    amigos:['Alex','Carlos'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'enviando...'
} 


//propiedades
//console.log(usuario)
//console.log(usuario.direccion.calle)
//console.log(usuario.amigos)

//Metodos
console.log(usuario.enviaCorreo())



// Trabajo com el DOM

const titulo= document.createElement('h1')
titulo.innerText= 'Soy un titulo creado con JS'
document.body.append(titulo)

const boton= document.createElement('button')
boton.innerText= 'Presioname'
document.body.append(boton)

boton.addEventListener('click',function (){
    //console.log('Evento click ejecutado')
    titulo.innerText="Evento click ejecutado"
    alert('Exito')
})


*/

// Trabajo con Arreglos

const nombres= ['Alan', 'Isa', 'Pablo', 'Juan Luis']
/*
for(let i = 0 ; i< nombres.length; i++){
    const elemento= nombres[i]
    console.log(elemento)

}

nombres.forEach(function (nombre){
    console.log(nombre)
})

// FUNCION MAP: Permite generar copia de un Array
const array2= nombres.map(function (nombre){
console.log(nombre)
return nombre
})

console.log(nombres)
console.log(array2)



// FUNCION FIND: Ubicar elementos en un arreglo 
const resultado = nombres.find(function (nombre){
    if(nombre === 'Pablo'){
        return nombre
    }
    })

console.log(resultado)


// FUNCION Filter: recorre el arreglo filtrado resultado en otro 
const resultado = nombres.filter(function (nombre){
    if(nombre != 'Pablo'){
        return nombre
    }
    })

console.log(nombres)    
console.log(resultado)



// FUNCION Concat: 
const edades=[78,89,12,8,10,15]
console.log(nombres.concat(edades))

//Spread Operator
console.log([...nombres, ...edades])



// MODULOS: IMPORT & EXPORT

//import {suma,resta} from "./calculadora.js"
import * as calc from "./calculadora.js"



console.log(calc.suma(45,54))
console.log(calc.resta(45,5))


//Ejemplo de Promesa

const ul= document.createElement('ul')

fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response){
                console.log("Carga de datos completada")
                return response.json()
            }).then(function (data){
                console.log(data)
                data.forEach( function (post){
                    const li = document.createElement('li')
                    li.innerHTML= post.title
                    ul.append(li)
                })
            document.body.append(ul)
            })

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')

*/


//Ejemplo con Async Await

const ul= document.createElement('ul')

async function cargarDatos(){
  const response= await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log('datos cargados')
  const datos = await response.json()
  console.log(datos)
  datos.forEach( function (post){
    const li = document.createElement('li')
    li.innerHTML= post.title
    ul.append(li)
})
document.body.append(ul)
}

cargarDatos()
console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')






