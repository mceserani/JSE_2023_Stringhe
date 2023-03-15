"use strict";

const fs = require('fs');
const readline = require('readline');


// Funzione che converte una stringa in codifica Morse
function toMorseCode(str) {
    // Crea un oggetto che associ ogni carattere dell'alfabeto alla sua codifica Morse
    let morseCodes = {
      'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
      'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
      'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
      'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
      'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
      'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
      '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
      '9': '----.'
    };

    str = str.toLowerCase();
    let m_str = "";
    for (let i = 0; i < str.length; i++){
      if (str[i] == " "){
        m_str += " ";
      }else{
        m_str += morseCodes[str[i]];
      }
    }
    return m_str;
}

// Acquisire l'input in base al tipo di input
if (process.argv.length > 2) {
  // Se l'input viene passato come parametro da riga di comando, leggerlo dal secondo parametro
  let inputStr = process.argv[2];
  let outputStr = toMorseCode(inputStr);
  console.log(outputStr);
} else if (process.stdin.isTTY) {
  // Se l'input viene inserito da tastiera, utilizzare readline per leggere l'input in modo sincrono
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Inserisci la stringa da convertire in codice Morse: ', (inputStr) => {
    let outputStr = toMorseCode(inputStr);
    console.log(outputStr);
    rl.close();
  });
} else {
  // Se l'input viene passato tramite redirezione dell'input da file, utilizzare fs per leggere l'input dallo stream di input
  let inputChunks = [];
  process.stdin.resume();
  process.stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
  });
  process.stdin.on('end', function () {
    let inputStr = inputChunks.join(' ');
    let outputStr = toMorseCode(inputStr);
    console.log(outputStr);
  });
}