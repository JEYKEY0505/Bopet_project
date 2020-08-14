class Persona{
   constructor(nombre, apellido, altura){
      this.nombre=nombre
      this.apellido= apellido
      this.altura=altura
   }
   saludar(funcion){
      console.log(`Que tenga un buen dia señor ${this.nombre} ${this.apellido}`)
      if(funcion){
         funcion(this.nombre, false)

      }
   }
   soyalto(){
      if(this.altura<180){
         console.log(`¡¡Soy un enano!! );`)
      } else{
         console.log("Colosal")
      }
   }
}

class Desarrollador extends Persona{
   constructor(nombre, altura){
      super(nombre, nombre, altura)
   }
   saludar(funcion){
       //let nombre=this.nombre  (es una forma de colocarlo)
       //let apellido= this.apellido

       //let {nombre, apellido}= this
       
      console.log(`Que tenga un buen dia señor ${this.nombre} ${this.apellido}`)
      if(funcion){
         funcion(this.nombre, true)

      }
   }
}
function Devolver(nombre, esDeveloper){
   console.log(`Hola ${nombre}`)
   if(esDeveloper){
      console.log(`No sabia que eras desarrollador`)
   }
}

Sebastian=new Persona('Sebastian', 'Ataucusi', 187)
Carmen=new Desarrollador('Carmen', 1.72)
Sebastian.saludar(Devolver)
Carmen.saludar(Devolver)