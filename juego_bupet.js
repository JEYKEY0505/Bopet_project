const btnEmpezar= document.getElementById('btnEmpezar')
const celeste= document.getElementById('celeste')
const violeta= document.getElementById('violeta')
const naranja= document.getElementById('naranja')
const verde= document.getElementById('verde')
const ULTIMO_LEVEL= 2

class Juego{
    constructor(){
        this.Inicializar()
        this.GenerarSecuenia()
        setTimeout(this.siguienteLevel,500)
    }
    Inicializar(){
        this.siguienteLevel=this.siguienteLevel.bind(this)
        this.subnivel=0
        this.elegircolor= this.elegircolor.bind(this) //para no tener que poner el bind a cada rato
        this.toggleBtnEmpezar()
        //hide es un css, por lo que si a la clase "btn-start" le añades los atributos de "hide"
       /*  .hide{
            display:none;
        } */
        this.level=1
        this.colores={
            celeste,     //paraece que al tener el mismo nombre   la ''llave'' y 'valor'
            violeta,     // te puedes saltar el paso "celeste: celeste"
            naranja,
            verde
        }
    }
    toggleBtnEmpezar(){ //Toggle significa palanca, por lo que servira como un switch
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        } else{
            btnEmpezar.classList.add('hide')
        }

    }
    GenerarSecuenia(){
        this.secuencia= new Array(10).fill(0).map(x =>Math.floor(Math.random()*4))
        //new Array(n) = Genera un array de n elementos
        //.fil(n)= lo llena por completo con n's
        //.map(x=>x)= Lee cada elemento del array
        //Math.floor(1.78) = Redondea el numero a "1", solo lee la parte entera
        //Math.random() = Genera valores entre el 0 y el 1
       
    }
    siguienteLevel(){
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumeroaColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    transformarColoraNumero(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia(){
        for(let i=0; i<this.level; i++){
            let color= this.transformarNumeroaColor(this.secuencia[i])
            setTimeout(()=> this.iluminarColor(color),1000*i)
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light')  // Creo que es algo diferente en python
        setTimeout(()=>this.apagar(color),400)
    }
    apagar(color){
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick(){
        //Todo se fue a la mierda, cuando interactuamos con la pagina con un click el "this"
        //que pertenecia a los objetos en JS se convierte en en el 'this' que pertence a HTML
        //Del objeto que clickeaste, por lo que si quieres mantenerlos unidos tienes que usar "bind"
      this.colores.celeste.addEventListener('click', this.elegircolor) 
      this.colores.violeta.addEventListener('click', this.elegircolor)
      this.colores.naranja.addEventListener('click', this.elegircolor)
      this.colores.verde.addEventListener('click', this.elegircolor)
/*       this.colores.verde.addEventListener('click', this.elegircolor.bind(self)) */
    }
    eliminarEventosClick(){
      this.colores.celeste.removeEventListener('click', this.elegircolor) 
      this.colores.violeta.removeEventListener('click', this.elegircolor)
      this.colores.naranja.removeEventListener('click', this.elegircolor)
      this.colores.verde.removeEventListener('click', this.elegircolor)
    }
    elegircolor(evento){
        const nombreDeColor= evento.target.dataset.color
        const numeroDeColor= this.transformarColoraNumero(nombreDeColor)  //Lo ouesto a la funcion transforma Numero a Color
        this.iluminarColor(nombreDeColor)
        if (numeroDeColor===this.secuencia[this.subnivel]){
            this.subnivel+=1
            if(this.subnivel==this.level){
                this.level+=1
                this.eliminarEventosClick()
                if(this.level===(ULTIMO_LEVEL+1)){
                    swal("¡¡Felicidades!", "!Ha ganado el juego y su premio es una vida social activa")
                    .then(()=>{
                        this.Inicializar()
                    })
                } else{
                    this.subnivel=0
                    swal("LEVEL UP", "Pasaste al siguiente nivel", "success" )
                    .then(() =>{

                     setTimeout(()=>this.siguienteLevel(),1000)
                    })
                }
            }
        
        } else{
            swal("PERDISTE", "ASI QUE SACA TU TRASERO DE AQUI", "error")
            .then(()=>{
                this.eliminarEventosClick()
                this.Inicializar()
            })

        }
    }

}
function empezarJuego(){
    window.juego=new Juego()
    //window.juego= Al ejecutarse la funcion la variable juego será visible en la consola

}