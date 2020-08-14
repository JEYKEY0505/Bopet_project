function Persona(nombre,altura){
   this.nam= nombre;
   this.edad=20;
   this.sexo= 'Masculino';
   this.altura= altura;
}
Persona.prototype.saludar= function() {
   console.log(`Hola y que te vaya bien hoy ${this.nam}`)
}
Persona.prototype.medir= function() {
   if(this.altura>180){
      console.log("Es alto")
   } else{
      console.log("Es bajo")
   }
}
array=[]
for(let i=0; i<2; i++){
   nombre=prompt("Ladra perro ¿Cual es tu nombre?: ")
   altura=prompt("Cuanto mide: ")
   persona=new Persona(nombre,parseInt(altura))
   persona.saludar()
   persona.medir()
   array.push(persona)

}
