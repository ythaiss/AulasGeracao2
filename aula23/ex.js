// - Link API: https://dog.ceo/api/breeds/image/random

Ex:

// Promises
// O que são? São objetos que representam o sucesso ou a falha de uma
// operação ASSÍNCRONA.

// Javascript = Thread Única; Sequencial; Síncrono.

// Método para gerar um assincronismo no JS:
// setTimeout (() => {}, milisegundos);

let randomNumber = 10; //Linha Síncrona

setTimeout (() => {
    randomNumber += 100;
    console.log (randomNumber);
} , 2000)

console.log (randomNumber); //Linha Síncrona


// Uma das principais características é poder iniciar um processo que será 
//finalizado posteriormente.