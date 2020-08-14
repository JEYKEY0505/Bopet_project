const API_URL='https://swapi.dev/api/'
const people_URL='people/:id/'
//pull request
/* $.get(`${API_URL}${people_URL.replace(':id',1)}`,{ crossDomain: true}, function(){
    console.log(arguments)  //si el request se cumple entonces obetendras un dicc   ionario el cual ejecutará sus argumentos
})      */                     //ya que no sabes cual es su nombre


function obtenerpersonaje(id){
    const url=`${API_URL}${people_URL.replace(':id',id)}`
    const opts={crossDomain:true}
    $.get(url, opts, personaje => {console.log(`No ${personaje.name}, yo soy tu padre`)})
}

for(let i=1; i<11; i++){
    obtenerpersonaje(i)
    //Cuando se ejecute el programa la funcion será llamada a la barra de tareas pero hay un problema
    //Y es que no todos se ejecutan igual, la funcion que llegue primero sera la primera en ejecutarse
    //Eso es lo que significa asincronismo 
}