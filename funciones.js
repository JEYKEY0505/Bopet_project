var Mario= {
    nombre: 'Mario',
    apellido:'Litovski',
    edad:18,
    Ingeniero: true,
    Doctor: true,
    Puto: true,
    Carpintero: false
 }
 
 function profesion(persona){
    console.log(`${persona.nombre} es: `)
    // Por default la funcion if nos tiene que comparar con positivo
    if (persona.Ingeniero==true){
       console.log('Ingeniero')
    } 
    if(persona.Doctor){
       console.log('Doctor')
    }
    if(persona.Puto){
       console.log('Puto')
    }
    if(persona.Carpintero){
       console.log('Carpintero')
    }
 }
 const MAYORIA=18
 // const mayordeEdad= function (persona){
 //    return persona.edad>=18
 // }
 const EsmayordeEdad = persona => persona.edad >=18
  const mayoria= persona => !EsmayordeEdad(persona) ? console.log("Acceso Denegado") : console.log("Go ahead")
 // function mayoria(persona){
 //    if(persona.edad>= MAYORIA){
 //       console.log(`${persona.nombre} es legal`)
 //    } else{
 //       console.log(`${persona.nombre} es menor de edad`)
 //    }
 // }

