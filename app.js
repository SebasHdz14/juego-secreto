/*let titulo = document.querySelector('h1'); El document sirve para conectar los elementos del JavaScript con el html
querySelctor es un método  
titulo.innerHTML = 'Jego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'; 

Declaración de una Función
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
   /// console.log(numeroDeUsuario === numeroSecreto); // === tiene que ser igual en valor e igual en tipo, si no es false
   if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',`El número es menor, llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        }
        else{
            asignarTextoElemento('p',`El número es mayor llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        }
        intentos ++;
        limpiarCaja();
   }
   return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si el array esta lleno
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        //si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar botón de Inicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'One Piece');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();