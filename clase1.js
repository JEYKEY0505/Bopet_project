const btnEmpezar= document.getElementById("btnEmpezar")
const contenedor= document.getElementById("contenedor")
const elementos= construir()
const primero= construir()
const segundo= construir()
function construir(){
    let elementos= []
    for(let i=0; i<5; i++){
        let fila=[]
        for(let j=0; j<5; j++){
            const caja=document.getElementById(`box${i+1}${j+1}`)
            elementos.push(caja)
        }
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
        this.elegirCaja= this.elegirCaja.bind(this)
        // this.elegirCaja2= this.elegirCaja2.bind(this)
        this.mundo= elementos
        this.level=0
        this.gamer=1
        this.primero=0
        this.segundo=0
        this.blancos=0
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
        for(let i=0; i<25; i++){
            
            elementos[i].classList.remove("primero", "segundo")
            
        }
    }
    generarSecuencia(grupo,ronda){
        this.secuencia=[]
        let contador=0
        while(contador<ronda){
            let valor=0
            for(let i=0; i<25; i++){            
                valor= Math.floor(Math.random()*4)
                if(this.pertenece(grupo[i])==2 && this.gamer==1){
                    if(valor==3){
                        this.secuencia.push(grupo[i])
                        this.indices[contador]= i
                        contador+=1
                    }
                }
                if(this.pertenece(grupo[i])==1 && this.gamer==2){
                    if(valor==3){
                        this.secuencia.push(grupo[i])
                        this.indices[contador]= i
                        contador+=1                   
                    }
                }
                if(this.pertenece(grupo[i])==0){
                    if(valor==3){
                        this.secuencia.push(grupo[i])
                        this.indices[contador]= i
                        contador+=1
                    }
                }

                if(contador==ronda){
                    break
                }
            }
        }
    }
    pertenece(caja){
        if(caja.classList.contains('primero')){
            return 1
        } else if(caja.classList.contains('segundo')){
           return 2
        } else{
            return 0
        }
        
    }
    terminar(){
        this.blancos=0
        this.primero=0
        this.segundo=0
        for(let i=0; i<25; i++){
            let aumento=this.pertenece(this.mundo[i])
            if(aumento==1){
                this.primero+=1
            } else if(aumento==2){
                this.segundo+=1
            } else{
                this.blancos+=1
            }
        }
    }
    siguienteRonda(){
        swal(`Ronda ${this.ronda1}`, "Turno del Jugador 1")
        .then(()=>{
            this.generarSecuencia(this.mundo, this.ronda1)
            console.log(this.secuencia)
            this.iluminarSecuencia(this.secuencia, this.ronda1)
            this.agregarEventosClick(this.mundo)
        })
    }
    siguienteRonda2(){
        swal(`Ronda ${this.ronda2}`, "Turno del Jugador 2")
        .then(()=>{
            this.generarSecuencia(this.mundo, this.ronda2)
            this.iluminarSecuencia(this.secuencia, this.ronda2)
            this.agregarEventosClick(this.mundo)
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
    agregarEventosClick(grupo){
        for(let i=0; i<25; i++){
            elementos[i].addEventListener('click', this.elegirCaja)
            
        }
    }
    eliminarEventosClick(grupo){
        for(let i=0; i<25; i++){
            elementos[i].removeEventListener('click', this.elegirCaja)
        }
    }
    elegirCaja(elemento){
        let caja=elemento.target
        console.log(caja)
        this.iluminarCaja(caja)
        let add=0

        if(caja===this.secuencia[this.level]){
            this.level+=1
            if(this.level==this.secuencia.length){
                
                if(this.gamer==1){
                    for(let i=0; i<this.level; i++){
                        this.secuencia[i].classList.remove('segundo')
                        this.secuencia[i].classList.add('primero') 
                    }
                    add=1

                }
                if(this.gamer==2){
                    for(let i=0; i<this.level; i++){
                        this.secuencia[i].classList.remove('primero')
                        this.secuencia[i].classList.add('segundo') 
                    }
                    add=-1
                }
                
                this.terminar()
                this.eliminarEventosClick(this.mundo)
                if(this.blancos==0 && this.primero>this.segundo){  
                    swal("¡¡TENEMOS UN GANADOR!!", "WINNER: JUGADOR 1")
                    .then(()=>this.Inicializar())
                } else if(this.blancos==0 && this.primero<this.segundo){
                    swal("¡¡TENEMOS UN GANADOR!!", "WINNER: JUGADOR 2" )
                    .then(()=>this.Inicializar())
                }else{
                    this.level=0
                    this.gamer=this.gamer+add
                    if(this.gamer==2){
                        this.ronda1+=1
                        this.siguienteRonda2()
                    }
                    if(this.gamer==1){
                        this.ronda2+=1
                        this.siguienteRonda()
                    } 
                }
                
            }
        }else{
            if(this.gamer==1){
                add=1
            }
            if(this.gamer==2){
                add=-1
            }
            this.gamer=this.gamer+add
            this.level=0
            this.eliminarEventosClick(this.mundo)
            swal("Fallaste", "Siguiente Jugador", "error")
            .then(()=>{
                if(this.gamer==2){
                    this.siguienteRonda2()
                }
                if(this.gamer==1){
                    this.siguienteRonda()
                }
            })
        }
        
    }
}


function empezarJuego(){
    window.juego= new Juego()
    
}