var sacha = {
   nombre: 'Sacha',
   apellido: 'Lifszyc',
   altura: 1.72,
   cantidadDeLibros: 111
}

var alan = {
   nombre: 'Alan',
   apellido: 'Perez',
   altura: 1.86,
   cantidadDeLibros: 78
}

var martin = {
   nombre: 'Martin',
   apellido: 'Gomez',
   altura: 1.85,
   cantidadDeLibros: 132
}

var dario = {
   nombre: 'Dario',
   apellido: 'Juarez',
   altura: 1.71,
   cantidadDeLibros: 90
}

var vicky = {
   nombre: 'Vicky',
   apellido: 'Zapata',
   altura: 1.56,
   cantidadDeLibros: 91
}

var paula = {
   nombre: 'Paula',
   apellido: 'Barros',
   altura: 1.76,
   cantidadDeLibros: 182
}


let clientes=[sacha,alan,martin,dario,vicky, paula]
let bajos= clientes.filter(x=>x.altura<1.75)
//Transformaremos de metros a centimetros la altura
// let alturacm= clientes.map(persona => {
//    persona.altura*=100      //esta que modifique directamente la alturo de los 'clientes2
//    return persona
// })
//Lo que hice aqui  fue modidicar la altura y pasar toda la lista a un nuevo array
//Hay un problema con esta funcion y es que tambien modifica el array 'clientes'
// por lo que necesitaremos arreglarlo

// let alturacm= clientes.map(persona=>{
//   return{ ...persona,
//    altura: persona.altura*100      //esto de aqui sera parte de un array independiente
//   }
// })

let alturacm= clientes.map(persona=>({
   ...persona,
   altura: persona.altura*100      //Funciona igual que el anterior solo que se ve maaas 'elegante' 
}))
 
//Ahora vamos  a reducir el array a un solo elemento
//En este caso al numero total de libros


/* let total=0
for(let k=0; k<6; k+=1){
   total+=clientes[k].cantidadDeLibros
} */
const total=clientes.reduce((acumulador,persona) => {return acumulador+ persona.cantidadDeLibros},0) 
//El cero es el valor del acumulador
console.log(`El total de libros es ${total}`)

