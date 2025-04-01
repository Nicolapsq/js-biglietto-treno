let n_km = prompt("inserisci numero di km che vuoi percorrere");

if (isNaN(n_km)){
    alert("Devi inserire un numero");
}
else if (n_km <= 0){
    alert("devi inserire almeno un km")
    n_km = prompt("inserisci numero di km che vuoi percorrere");
}
else {
    alert("inserimento effettuato");
}

console.log(n_km);


let età = prompt("inserisci la tua età");

const prezzoBigliettoPer_km = 0.21;
const scontoGiovani = 0.20
const scontoAnziani = 0.40

if (isNaN(età)){
    alert("Devi inserire l'età in numero");
}
else if (età < 6){
    alert("devi avere almeno 6 anni")
}
else if (età > 65){
    let costo = alert("questo è il prezzo" + " " + (prezzoBigliettoPer_km * n_km) / scontoAnziani + "€");
}
else if (età < 18){
    let costo = alert("questo è il prezzo" + " " + (prezzoBigliettoPer_km * n_km) / scontoGiovani + "€");
}
else {
    alert("inserimento età effettuata");
}

console.log(età);







// const sconto_minorenni = 20%;
// const sconto_over_65 = 40% ;

