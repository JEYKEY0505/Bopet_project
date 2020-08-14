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
const Comermucho= ()=> Math.random()< 0.3
const Jugarpichanga= ()=> Math.random()<0.5
const meta=60
let i=0
while(Persona.Peso>meta){
   let random= Math.random()
   if(Comermucho()){
      Engordar(Persona)
   }
   if(Jugarpichanga()){
      Adelgazar(Persona)
   }
   i+=1
}
console.log(i)
console.log(`Se acabo el año y ahora pesas ${Persona.Peso}kg`)