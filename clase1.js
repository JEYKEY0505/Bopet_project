const btnEmpezar= document.getElementById("btnEmpezar")
const contenedor= document.getElementById("contenedor")
const elementos= construir()
const primero= construir()
const segundo= construir()
function construir(){
    let elementos= {}
    for(let i=0; i<5; i++){
        let fila=[]
        for(let j=0; j<5; j++){
            const caja=document.getElementById(`box${i+1}${j+1}`)
            fila.push(caja)
        }
        elementos[i]=fila
    }
    return elementos
}



class Juego{
    constructor(){
        this.Inicializar()
        this.siguienteRonda()

    }
    Inicializar(){
        this.toggle()
        this.ronda1= 2
        this.ronda2= 2
        this.elegirCaja1= this.elegirCaja1.bind(this)
        this.elegirCaja2= this.elegirCaja2.bind(this)
        this.primero= primero
        this.segundo=segundo
        this.level=0
        this.indices=[]
        this.secuencia=[]
        this.limpiar()
    }
    toggle(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove("hide")
            contenedor.classList.add('hide')
        } else{
            btnEmpezar.classList.add('hide')
            setTimeout(()=>contenedor.classList.remove("hide"), 200)
        }
    }
    limpiar(){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                elementos[i][j].classList.remove("primero", "segundo")
            }
        }
    }
    generarSecuencia(grupo,ronda){
        this.secuencia=[]
        let contador=0
        while(contador<ronda){
            let valor=0
            for(let i=0; i<5; i++){
                for(let j=0; j<5; j++){
                    valor= Math.floor(Math.random()*4)
                    if(valor==3 && grupo[i][j]!=undefined){
                        this.secuencia.push(grupo[i][j])
                        this.indices[contador]=[i,j]
                        contador+=1
                    }
                    if(contador==ronda){
                        break
                    }
                }
                if(contador==ronda){
                    break
                }
            }
        }
        
    }
    siguienteRonda(){
        swal(`Ronda ${this.ronda1}`, "Turno del Jugador 1")
        .then(()=>{
            this.generarSecuencia(this.primero, this.ronda1)
            console.log(this.secuencia)
            this.iluminarSecuencia(this.secuencia, this.ronda1)
            this.agregarEventosClick1(this.primero)
        })
        
        
    }
    siguienteRonda2(){
        swal(`Ronda ${this.ronda2}`, "Turno del Jugador 2")
        .then(()=>{
            this.generarSecuencia(this.segundo, this.ronda2)
            console.log(this.secuencia)
            this.iluminarSecuencia(this.secuencia, this.ronda2)
            this.agregarEventosClick2(this.segundo)
        })

    }
    iluminarSecuencia(secuencia,ronda){
        for(let i=0; i<ronda;i++){
            setTimeout(()=>this.iluminarCaja(secuencia[i]),1000*(i+1))
        }
    }
    iluminarCaja(secuencia){
        secuencia.classList.add('light')  // Creo que es algo diferente en python
        setTimeout(()=>secuencia.classList.remove('light'),400)
    }
    agregarEventosClick1(grupo){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                elementos[i][j].addEventListener('click', this.elegirCaja1)
            }
        }
    }
    eliminarEventosClick1(grupo){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                elementos[i][j].removeEventListener('click', this.elegirCaja1)
            }
        }
    }
    elegirCaja1(elemento){
        let caja=elemento.target
        console.log(caja)
        this.iluminarCaja(caja)

        if(caja===this.secuencia[this.level]){
            this.level+=1
            if(this.level==this.secuencia.length){
                let index= this.indices.sort()
                for(let i=0; i<this.level; i++){
                    this.secuencia[i].classList.remove('segundo')
                    this.secuencia[i].classList.add('primero')
                    let ele=index.pop()
                    let fila=ele[0]
                    let columna= ele[1]
                    
                    this.primero[fila].splice(columna,1)
                }
                if(this.primero.length + this.segundo.length ==25 && this.primero.length>this.secuencia.length){
                    swal("¡¡TENEMOS UN GANADOR!!", "WINNER: JUGADOR 1" )
                    .then(()=>this.Inicializar())
                }
                if(this.primero.length + this.segundo.length ==25 && this.primero.length<this.secuencia.length){
                    swal("¡¡TENEMOS UN GANADOR!!", "WINNER: JUGADOR 2" )
                    .then(()=>this.Inicializar())
                }
                this.level=0
                this.ronda1+=1
                this.eliminarEventosClick1(this.primero)
                this.siguienteRonda2()
            }
        }else{
            this.level=0
            this.eliminarEventosClick1(this.primero)
            swal("Fallaste", "Siguiente Jugador", "error")
            .then(()=>this.siguienteRonda2())
        }
        
    }

    agregarEventosClick2(grupo){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                elementos[i][j].addEventListener('click', this.elegirCaja2)
            }
        }
    }

    eliminarEventosClick2(grupo){
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                elementos[i][j].removeEventListener('click', this.elegirCaja2)
            }
        }
    }
    elegirCaja2(elemento){
        let caja=elemento.target
        this.iluminarCaja(caja)

        if(caja===this.secuencia[this.level]){
            this.level+=1
            if(this.level==this.secuencia.length){
                let index= this.indices.sort()
                for(let i=0; i<this.level; i++){
                    this.secuencia[i].classList.remove('primero')
                    this.secuencia[i].classList.add('segundo')
                    let ele=index.pop()
                    let fila=ele[0]
                    let columna= ele[1]
                    this.segundo[fila].splice(columna,1)
                }
                if(this.primero.length + this.segundo.length ==25 && this.primero.length>this.secuencia.length){
                    swal("¡¡TENEMOS UN GANADOR!!", "WINNER: JUGADOR 1" )
                    .then(()=>this.Inicializar())
                }
                if(this.primero.length + this.segundo.length ==25 && this.primero.length<this.secuencia.length){
                    swal("¡¡TENEMOS UN GANADOR!!", "WINNER: JUGADOR 2" )
                    .then(()=>this.Inicializar())
                }
                this.level=0
                this.ronda2+=1
                this.eliminarEventosClick2(this.segundo)
                this.siguienteRonda()
            }
        }else{
            this.level=0
            this.eliminarEventosClick2(this.segundo)
            swal("Fallaste", "Siguiente Jugador", "error")
            .then(()=>this.siguienteRonda())
            
        }
    }
}

function empezarJuego(){
    window.juego= new Juego()
    
}
