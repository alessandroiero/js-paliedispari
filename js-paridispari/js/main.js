'use strict';

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


// ------ FUNZIONI ------
// Funzione numero random
//dichiaro una funzione random che ci servirà in caso di numeri random
function numeroRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
// funzione somma dei due parametri con risultato pari o dispari
function pariDispari(par1, par2) {
    const somma = par1 + par2;
    // sommiamo i due parametri
    if (somma % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}
// ------ FUNZIONI ------


//dichiaro variabili prompt che saranno le varie scelte dell'utente se il numero è pari o dispari e il numero stesso da inserire < di 5
const sceltaUtente = prompt('pari o dispari');
const sceltaNumero = Number(prompt('inserisci un numero da 1 a 5'))
console.log(`Il numero scelto è ${sceltaNumero}`);

//numero randomico generato dal computer
let computerNumber = numeroRandom(1, 5);
console.log(`Il numero scelto dal pc randomicamente è ${computerNumber}`);

// Valutiamo chi vince
// Creiamo una nuova variabile dove inseriremo la funzione pari e dispari con all'interno come parametri le due variabili
let pariVsDispari = pariDispari(computerNumber, sceltaNumero);
console.log(`La somma è ${pariVsDispari}, tu hai selezionanto ${sceltaUtente}`);

// Condizione per valutare chi vince
if (sceltaNumero < 1 || sceltaNumero > 5) {
    console.log('Numero non valido. Il numero deve essere compreso tra 1 e 5');
}
else if ((pariVsDispari === 'pari' && sceltaUtente === 'pari') || (pariVsDispari === 'dispari' && sceltaUtente === 'dispari')) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}