const btnEmpezar= document.getElementById('btnEmpezar')
const celeste= document.getElementById('celeste')
const violeta= document.getElementById('violeta')
const naranja= document.getElementById('naranja')
const verde= document.getElementById('verde')

class Juego{
    constructor(){
        this.Inicializar()
        this.GenerarSecuenia()
    }
    Inicializar(){
        btnEmpezar.classList.add('hide') 
        //hide es un css, por lo que si a la clase "btn-start" le añades los atributos de "hide"
       /*  .hide{
            display:none;
        } */
        this.level=1
    }
    GenerarSecuenia(){
        this.secuencia= new Array(10).fill(0).map(x =>Math.floor(Math.random()*4))
        //new Array(n) = Genera un array de n elementos
        //.fil(n)= lo llena por completo con n's
        //.map(x=>x)= Lee cada elemento del array
        //Math.floor(1.78) = Redondea el numero a "1", solo lee la parte entera
        //Math.random() = Genera valores entre el 0 y el 1
     
    }

}
function empezarJuego(){
    window.juego=new Juego()
    //window.juego= Al ejecutarse la funcion la variable juego será visible en la consola

}