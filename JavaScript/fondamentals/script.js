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

// Arrays
// struttura base, più usata
const friends = ["Valentina", "Alessia", "Gaia"];
//altro modo
const years = new Array(1991, 1984, 2008, 2020);
// per vedere la lunghezza degli Array, possiamo usare console.log(friends.lenght)
// ricorda che length indica l'ultimo numero di un array quindi con -1 ottengo quello prima
//all'interno delle quadre js si aspetta un'espressione, non un'istruzione
//metodi array:
//push = inserire elementi a fine array
//es:
friends.push("Letizia"); //è teoricamente una funzione
// unshift: aggiungere elementi all'inizio di un array
friends.unshift("Baby");
//tutti e due i metodi restituiscono una nuova lunghezza dell'array
//pop: rimuove l'ultimo elemento
friends.pop(); //non serve aggiungere altre indicazioni
//questo se messo in una variabiloe e consollato non restituisce la lunghezza, ma l'elemento rimosso
//shift: rimuove il primo
friends.shift();
//indexOf : ci da la posizione dell'elemento
console.log(friends.indexOf("Alessia"));
//in ES6 è stato inserito il metodo includes che ritornerà true se lò'elemento fa parte dell'array, e false il contrario
console.log(friends.includes("Alessia"));
//includes non fa coercizione quindi se inserisco qualcosa tipo un numero esattamente come numero
//e con includes lo passo come stringa, dato che non c'è coercizione mi darà false
// esercizio
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, bills, totals);

//Oggetti
// gli oggetti hanno coppie chiave-valore
//la differenza con gli array sta nel fatto che negli array l'ordine con cui scriviamo gli elementi è estremamente importante
// metodi per recuperare le info da un oggetto:
// dot notation = obj.name
//bracket notation = obj['name'] <-- come un array e la scriviamo come stringa

const giulia = {
  firstName: "Giulia",
  lastName: "Gallo",
  age: "28",
  animals: ["cat", "dog"],
};
const interestedIn = prompt(
  "what do you want to know? firstName, lastName, age or animals"
);
//console.log(giulia[interestedIn]);
//per inserire una nuova proprietà uso  :
giulia.location = "Padova";
giulia["email"] = "@sahfs";

if (giulia[interestedIn]) {
  console.log(
    "Giulia have 2 animals " +
      giulia.animals +
      " and she loves her " +
      giulia.animals[0]
  );
}

// oppure meglio
console.log(
  `${giulia.firstName} has ${giulia.animals.length} animals, and she loves her ${giulia.animals[0]}`
);

//all'interno degli oggetti possiamo inserire anche le funzione es:
// calcAge: function () {
// return 2025 - this.age}
//console.log (giulia.calcAge())
//this indica l'oggetto che viene chiamato quindi:
//all'interno dell'oggetto identifica in auto l'oggetto in questione
//esercizio

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
}

//LOOP = autoatizzare cose da fare e rifare
//for = nelle parentesi ci va l'istruzione
// è un contatore con tre parti:
// 1 : valore iniziale del contatore, una ripetizione
// rappresenta una variabile iniziale
// 2: è una condizione logica che viene valutata prima di ogni interazione del ciclo,
//viene valutata prima di partire, quindi se è vera, si passa alla 3, appena diventa falsa il ciclo si interrompe
//3: rappresenta quello che deve fare il contatore dopo ogni interazione, altrimenti rimarrebbe come la condizione iniziale per sempre
//infine basterà scrivere nel for, il codice che vogliamo sia ripetuto per tot volte
// per esempio se dobbiamo contare delle ripetizioni:
for (let rep = 1; rep <= 10; rep++) {
  //primo unto = valore di partenza, si usa let perchè il ciclo for poi la modificherà
  // la nseconda parte ci dice la logica del ciclo, in questo caso che l'esercizio(il ciclo) starà tra 1 e 10 ripetizioni massimo
  console.log(`repetition ${rep}`);
} // ogni volta che viene fatta una ripetizione il ciclo controllerà
// se la condizione è ancora vera (rep<=10), se è vera andrà avanti

//altro esempio
const year = [1997, 1993, 2010, 2002, 1980];
const ages = [];
for (let i = 0; i < year.length; i++) {
  ages.push(2037 - year[i]);
}
console.log(ages);

//esercizio loop + array
const giuliaArray = [
  "Giulia",
  "Gallo",
  2037 - 1997,
  "student",
  ["Alessia", "Valentina", "Gaia"],
];

//scrivere tutti gli elementi in console
for (let i = 0; i < giuliaArray.length; i++) {
  if (typeof giuliaArray[i] !== "string") continue; //sto dicendo che il ciclo mentre va deve considerare solo le non string e andare avanti
  //se usiamo break invece gli stiamo dicendo che appena trova quello che gli indichiamo deve finire il ciclo e uscire dal loop
  console.log(giuliaArray[i]);
}

//esistono anche break e continue che sono delle parole chiave (esempio sopra)

//while
//ammette una condizione e infatti il loop continuerà finchè la condizione sarà vera
//il componente di partenza va dichiarato all'esterno del ciclo
//l'ultimo componente va all'interno
// il ciclo while è più versatile e l'unica istruzione davvero utile è la condizione
let rep = 1;
while (rep <= 10) {
  console.log(`${rep}`);
  rep++;
}

//altro esempio
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  //diverso da zero poiè finchè non è zero deve continuare
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
