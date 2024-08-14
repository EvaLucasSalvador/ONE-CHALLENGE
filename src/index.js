import encrypt from './encriptado.js';

// Tomar los elementos del html por su Id y ponerlos en una variable
const btnCode = document.getElementById("btn-code");
const btnDecode = document.getElementById("btn-decode");
const btnCopy = document.getElementById("btnCopy");
const muñeco = document.getElementById("muñeco");
const titulo_mensaje = document.getElementById("titulo-mensaje");

// Llamar a funciones con eventos del DOM
btnCode.addEventListener('click', function(){
  const inputValue = document.getElementById("textToInput").value;
  const Output = document.getElementById("textToOutput");
  Output.textContent  = encrypt.encode(inputValue);
  muñeco.src = ""
  titulo_mensaje.textContent = ""
});

btnDecode.addEventListener('click', function(){ 
  const inputValue = document.getElementById("textToInput").value;
  const Output = document.getElementById("textToOutput"); 
  Output.textContent  = encrypt.decode(inputValue);
  muñeco.src = ""
  titulo_mensaje.textContent = ""
});

btnCopy.addEventListener('click', function(){ 
  const Output = document.getElementById("textToOutput").textContent; 
  navigator.clipboard.writeText(Output)
});

console.log(encrypt);