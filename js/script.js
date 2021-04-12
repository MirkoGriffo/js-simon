/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

//genero 5 numeri casuali da 1 a 100

var n1 = Math.floor(Math.random() * 100);
var n2 = Math.floor(Math.random() * 100);
var n3 = Math.floor(Math.random() * 100);
var n4 = Math.floor(Math.random() * 100);
var n5 = Math.floor(Math.random() * 100);

var numRandom = [n1, n2, n3, n4, n5];

//console.log(numRandom)


alert("numeri da memorizzare: " + n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5);




var counter = 30;
var contoAllaRovescia = setInterval(function () {

    if (counter === 0) {

        document.getElementById("countdown").style.display = "none";

        timer();

        clearInterval(contoAllaRovescia);


    }

    else if (counter > 0) {

        document.getElementById("countdown").innerHTML = counter;

        counter--;

    }


}, 1000);


//Funzione timer

function timer() {
    var n1Inserito = parseInt(prompt("Qual era il primo numero?"));
    var n2Inserito = parseInt(prompt("Qual era il secondo numero?"));
    var n3Inserito = parseInt(prompt("Qual era il terzo numero?"));
    var n4Inserito = parseInt(prompt("Qual era il quarto numero?"));
    var n5Inserito = parseInt(prompt("Qual era il quinto numero?"));

    var numInseriti = [n1Inserito, n2Inserito, n3Inserito, n4Inserito, n5Inserito];

    //console.log(numInseriti);

    var numGiusti = [];
    for (i = 0; i < numRandom.length; i++) {
        if (numRandom[i] === numInseriti[i]) {
            numGiusti.push(numRandom[i]);
        }
    }
    //console.log(numGiusti);

    //Controlla quanti numeri ha indovinato

    var numIndovinati = numGiusti.length;

    if (numIndovinati === 0) {
        alert("Non hai indovinato nessun numero")
    }

    else if (numIndovinati === 1) {

        alert("Hai indovinato un solo numero, ecco quale: " + numGiusti);


    }
    else {
        alert("Hai indovinato " + numIndovinati + " numeri, ecco quali: " + numGiusti);
    }
}



