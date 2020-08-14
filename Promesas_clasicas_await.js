const API_URL='https://swapi.dev/api/'
const people_URL='people/:id/'

const opts={crossDomain:true}

function obtenerpersonaje(id){
    return new Promise((resolve,reject)=>{
        const url=`${API_URL}${people_URL.replace(':id',id)}`
        $.get(url, opts, personaje=> resolve(personaje)).fail(()=> reject(id))
    })
}
let ids=[1,2,3,4,5,6]
let promesas=ids.map(id => obtenerpersonaje(id))

async function obtenerpersonajes(){
    let ids=[1,2,3,4,5,6]
    let promesas=ids.map(id => obtenerpersonaje(id))
    try{
        let resultado= await Promise.all(promesas) //Solo trae la lista y nada mas, es como un f(x)=x
        console.log(resultado[0].name)
    } catch(id){
        console.log(`Lo sentimos ocurrio un error al tratar de cargar el personaje ${id}`)
    }
    
}
obtenerpersonajes()


