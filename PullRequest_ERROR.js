const API_URL='https://swapi.dev/api/'
const people_URL='people/:id/'
//pull request
/* $.get(`${API_URL}${people_URL.replace(':id',1)}`,{ crossDomain: true}, function(){
    console.log(arguments)  //si el request se cumple entonces obtendras un diccionario el cual ejecutará sus argumentos
})      */                     //ya que no sabes cual es su nombre


function obtenerpersonaje(id, callback){
    const url=`${API_URL}${people_URL.replace(':id',id)}`
    const opts={crossDomain:true}
    $.get(url, opts, callback).fail(function(){
        console.log(`Ha ocurrido un problema al cargar el personaje ${id}, esta es un red privada por lo cual usted no puede entrar`)
    })
    //En pocas palabras si se te va la red cuando esta cargando objetos de otras paginas saldra el mensaje que colocaste
}

obtenerpersonaje(1, function(personaje){
    console.log(`No ${personaje.name}, YO SOY TU PADRE`)
    obtenerpersonaje(2, function(personaje){
        console.log(`No ${personaje.name}, YO SOY TU PADRE`)
        obtenerpersonaje(3, function(personaje){
            console.log(`No ${personaje.name}, YO SOY TU PADRE`)
            obtenerpersonaje(4, function(personaje){
                console.log(`No ${personaje.name}, YO SOY TU PADRE`)
                obtenerpersonaje(5, function(personaje){
                    console.log(`No ${personaje.name}, YO SOY TU PADRE`)
                })
            })
        })
    })
  
})


