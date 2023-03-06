"use strict";

const fs = require('fs');
const readline = require('readline');

// Scrivi una funzione che prenda in input una stringa di parole separate da spazi e restituisca una nuova stringa in cui le parole sono invertite rispetto alla loro posizione originale.
function reverseWords(str) {

    // SCRIVI QUI IL TUO CODICE
    
}

  
// Acquisire l'input in base al tipo di input
if (process.argv.length > 2) {
    // Se l'input viene passato come parametro da riga di comando, leggerlo dal secondo parametro
    let inputStr = process.argv[2];
    let outputStr = reverseWords(inputStr);
    console.log(outputStr);
  } else if (process.stdin.isTTY) {
    // Se l'input viene inserito da tastiera, utilizzare readline per leggere l'input in modo sincrono
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Inserisci la stringa da convertire in codice Morse: ', (inputStr) => {
      let outputStr = reverseWords(inputStr);
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
      let outputStr = reverseWords(inputStr);
      console.log(outputStr);
    });
  }