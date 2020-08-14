const API_URL='https://swapi.dev/api/'
const people_URL='people/:id/'
//pull request
/* $.get(`${API_URL}${people_URL.replace(':id',1)}`,{ crossDomain: true}, function(){
    console.log(arguments)  //si el request se cumple entonces obetendras un diccionario el cual ejecutará sus argumentos
})      */                     //ya que no sabes cual es su nombre

lukeURL=`${API_URL}${people_URL.replace(':id',4)}`
$.get(`${API_URL}${people_URL.replace(':id',4)}`,{ crossDomain: true}, Luke =>{
    console.log(`No ${Luke.name}, yo soy tu padre`)  //si el request se cumple entonces obetendras un diccionario el cual ejecutará sus argumentos
    
})     



function obtenerpersonaje(id){
    const url=`${API_URL}${people_URL.replace(':id',id)}`
    $.get(url, {crossDomain=true}, personaje =>{
        console.log(`No ${personaje.name}, yo soy tu padre`)} 
}
