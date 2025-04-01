const prezzoBigliettoPer_km = 0.21;
const scontoGiovani = 20 / 100
const scontoAnziani = 40 / 100

// Controllo KM
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

console.log(`${"kilometri"}, ${n_km}`);

// Controllo Età
let eta = prompt("inserisci la tua età");

if (isNaN(eta)){
    alert("Devi inserire l'età in numero");
}
else if (eta < 6){
    alert("devi avere almeno 6 anni")
} else {

    // Calcolo biglietto
    if (eta >= 65){
        // - Calcolo il prezzo del biglietto con lo sconto
        let prezzoSenzaSconto = prezzoBigliettoPer_km * n_km;
        console.log(`${"prezzo senza sconto"}, ${prezzoSenzaSconto}`);
    
        //   - Calcolo lo sconto del biglietto
        let prezzoFinale = prezzoSenzaSconto - (prezzoSenzaSconto * scontoAnziani);
        console.log(`${"prezzo finale con sconto anziani"}, ${prezzoFinale.toFixed(2)}`);
        //   - Sottraggo lo sconto al prezzo del biglietto senza sconto
        // Stampo il prezzo finale del biglietto
        alert("questo è il prezzo" + " " + (prezzoFinale) + "€");
    }
    else if (eta < 18){
         // - Calcolo il prezzo del biglietto con lo sconto
         let prezzoSenzaSconto = prezzoBigliettoPer_km * n_km;
        console.log(`${"prezzo senza sconto"}, ${prezzoSenzaSconto}`);
         
         //   - Calcolo lo sconto del biglietto
         let prezzoFinale = (prezzoSenzaSconto - (prezzoSenzaSconto * scontoGiovani));
        console.log(`${"prezzo finale con sconto giovani"}, ${prezzoFinale.toFixed(2)}`);
    }

    else {
        alert("inserimento età effettuata");
    }
    
    console.log(`${"la sua età è di"}, ${eta}`);
}








// const sconto_minorenni = 20%;
// const sconto_over_65 = 40% ;

