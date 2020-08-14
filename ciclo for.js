let Persona={
   Nombre: 'Sebastian',
   Apellido: 'Ataucusi',
   Edad: 19,
   Peso: 64
}

console.log(`Al inicio del año pesabas ${Persona.Peso}kg`)
const cambio=0.2
const Engordar= Persona=> Persona.Peso+= cambio
const Adelgazar= Persona=> Persona.Peso-=cambio
for(let i=1; i<366; i+=1){
   var random= Math.random()
   if(random<=0.60){
      Engordar(Persona)
   }else{
      Adelgazar(Persona)
   }


}
console.log(`Se acabo el año y ahora pesas ${Persona.Peso}kg`)
