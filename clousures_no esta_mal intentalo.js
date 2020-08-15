function saludar(final){
    return function(nombre){
        console.log(`Hola ${nombre} ${final}`)
    }
}
const saludoVenezolano= saludar('pana')
const saludoArgentino= saludar('che')
const saludoColombiano= saludar('parce')

saludoArgentino('Sebas')
saludoColombiano('Sebas')
saludoVenezolano('Sebas')