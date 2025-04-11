// in js ogni vlaore è un oggetto o un primitivo
//tipi di dati primitivi; numeri, stringhe, boolean, undefined, null, symbol e byg int
//numeri: hanno sempre la virgoa anche se non la vediamo
//string: sequenza di caratteri espressi con le virgolette
//boolean: è un vero o falso = prendere decisioni
// questi sono i più importanti
//undefined è una vairabile non ancora definita, abbiamo dichiarato senza darle un valore
//null è sempre un valore vuoto
// symbol introdotto con ES6 è un valore unico non modificabile
//ES2020 è big int è per numeri troppo grandi
//la digitazione è dinamica, in js non devi dire che tipo di dato è
//è il valore che ha un tipo, non la variabile
//typeof nel console log ci mostra che tipo di dato è
//prima di ES6 per fare in console più linee si doveva usare /n/
//ora i backthick premendo invio lo fanno in auto
//chicca: windows+ fa uscire delle emoticon su vs
//conversione, quando convertiamo manualmente un dato in un altro
//coercizione, quando js converti in auto i legami dietro le quinte per noi
//es:
const inputYear = "1997";
console.log(Number(inputYear) + 18); //in questo modo verrà convertita in num
//ma se inserisco qualcosa che non può esserlo:
console.log("Giulia"); //NaN = not a number  in pratica ogni volta che proviamo a convertire qualcosa che non è un n
//al contrario se usiamo il + ed è presente una string e un n, il n verrà convertito in auto in stirng
//mentre se c'è il - le stringhe saranno convertite in num
console.log("io ho" + 28 + "anni"); // il numero diventerà string
console.log("23" - "10" - 3); // otterrò un numero
// 5 valori sono false: 0, '' , undefined , null , Nan se convertiti in boolean
// == converti i valori quindi:
"18" == 18; // è true, ma
"18" === 18; // è false
// in pratica == potremmo definirlo com: è vagamente uguale
//mentre === potremmo definirlo con: è uguale
//esercizio base
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

//avrei potuto inseire anche un altro else if (dolphins === koalas)

// Fondamentali parte 2
// se scrivo 'use strict' attivo la strict mode in tutto lo script prima di tutto
//rende il codice più sicuro

// funzioni: function + nome funzione + (input funzione) + {codice eseguito}
// si usano per riutilizzare il codice della funzione più volte all'interno di tutto il file
//esempio
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// altro modo per scrivere funzioni
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

// arrow function
const calcAge2 = (birthYear) => 2037 - birthYear; // in pratica dopo la freccia semplicemtne scriviamo quello che vogliamo ritornare

//esercizio su funzioni:
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins2, scoreKoalas2);
