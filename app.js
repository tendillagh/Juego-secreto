//let titulo = document.querySelector('h1'); //el document. permite agregar el texto en la pág de internet
//titulo.innerHTML = '¡Juego del número secreto!';

//let parrafo =document.querySelector('p');
//parrafo.innerHTML ='Indica un número del 1 al 10';

//las primeras dos lineas se pasaron para la linea 8 y se cambio el h1 por ELEMENTO y el texto de "juego del numero secreto" por TEXTO
let numerosecreto = 0;
let numintentos= 0;
let listanumerossorteados = []; 
let numeromaximo = 10;
//console.log(numerosecreto)

function asignartextoelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); //el document. permite agregar el texto en la pág de internet
    elementoHTML.innerHTML = texto;   
    return;
    //se agrega el return para que retorne a este proceso 
}
function verificarintento(){
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);

console.log (numintentos);
    if (numerodeusuario===numerosecreto){
        asignartextoelemento('p',`Acertaste en ${numintentos} ${(numintentos===1) ? 'vez' : 'veces'}`);
   document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numerodeusuario>numerosecreto){
            asignartextoelemento('p',"El número secreto es menor")     
        } else {
                asignartextoelemento('p',"El número secreto es mayor")  
        }
        numintentos++;
        limpiarcaja();
    }
     return;
}
//para limpiar el cuadro de ID
function limpiarcaja(){
  document.querySelector('#valorusuario').value= '';
}
//va a retornar un nuevo valor de numero secreto
function generarnumerosecreto(){
let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

console.log(numerogenerado);
console.log(listanumerossorteados);
// si ya sorteamos todos los numeros.... mostrar mensaje
if(listanumerossorteados.length==numeromaximo){
asignartextoelemento('p',"Ya se sortearon todos los numeros posibles");
}else{
    // si el num generado esta incluido en la lista
    if (listanumerossorteados.includes(numerogenerado)){
    return generarnumerosecreto();
    }else {
        listanumerossorteados.push(numerogenerado);
        return numerogenerado;   
    }

}

}
function condicionesiniciales(){
    asignartextoelemento('h1', "Juego del némero secreto"); 
asignartextoelemento('p', `Indica un número del 1 al ${numeromaximo}`);
numerosecreto = generarnumerosecreto();
numintentos=1; 
}

function reiniciarjuego(){
    //limpiar la caja
    limpiarcaja();

    //indicar mensaje de intervalo de numeros
    //generar el nuevo numero aleatorio
     //inicializar el numero de intentos 
condicionesiniciales();

    //deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');

}
//se dejo solo una declaración de variables y se metio aqui abajo tiene un elemento y un texto
//solo se quedo el function de la linea 8

condicionesiniciales();
