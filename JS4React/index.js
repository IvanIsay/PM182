
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


*/

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
