'use strict';

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function palindroma(parola){
   let len = parola.length;
   //ciclo for che divide le parole a metà
   for(let i = 0 ; i<len/2; i++){
       if(parola[i] !== parola[len - 1 - i]){
           return 'La parola non è palindroma';
       }
   }
   return 'La parola è palindroma';
}
let parolaUtente = prompt('inserisci la parola');

// Stampiamo se la parola è palindroma o meno
console.log(palindroma(parolaUtente));
