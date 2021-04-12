/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli
*/

var n1 = Math.floor(Math.random() * 500);
var n2 = Math.floor(Math.random() * 500);
var n3 = Math.floor(Math.random() * 500);
var n4 = Math.floor(Math.random() * 500);
var n5 = Math.floor(Math.random() * 500);

alert("numeri da memorizzare: " + n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5);


