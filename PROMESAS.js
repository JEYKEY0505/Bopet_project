const API_URL='https://swapi.dev/api/'
const people_URL='people/:id/'

const opts={crossDomain:true}

function obtenerpersonaje(id){
    return new Promise((resolve,reject)=>{
        const url=`${API_URL}${people_URL.replace(':id',id)}`
        $.get(url, opts, personaje=> resolve(personaje)).fail(()=> reject(id))
    })
}

obtenerpersonaje(1)
    .then(personaje => {
        console.log(`No ${personaje.name}, YO SOY TU PADRE`)
        return obtenerpersonaje(2)
    })
    .then(personaje =>{
        console.log(`No ${personaje.name}, YO SOY TU PADRE`)
        return obtenerpersonaje(3)
    })
    .then(personaje =>{
        console.log(`No ${personaje.name}, YO SOY TU PADRE`)
        return obtenerpersonaje(4)
    })
    .then(personaje =>{
        console.log(`No ${personaje.name}, YO SOY TU PADRE`)
    })
    .catch( id=> console.log(`Sucedió un error al tratar de cargar el personaje ${id}`))
