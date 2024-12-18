

// Chiediamo alla persona quanti km vuole percorrere
let kmUser = prompt("Quanti km vuoi percorrere?");

// Chiediamo l'età della persona
let ageUser = prompt("Quanti anni hai?");

let ticketPrice = kmUser * 0.21;

// console.log(ticketPrice)

// Controllo se il cliente è minorenne e applicare lo sconto


if (ageUser < 18) {
    let priceUnder = parseFloat((ticketPrice * 0.8).toFixed(2)); // Applica lo sconto del 20%
    console.log("Il passegero ha diritto ad uno sconto del 20%:", parseFloat((ticketPrice * 0.8).toFixed(2)));
} else if (ageUser >64) {
    let priceUnder = parseFloat((ticketPrice * 0.6).toFixed(2)); // Applica lo sconto del 40%
    console.log("Il passegero ha diritto ad uno sconto del 40%:" ,parseFloat((ticketPrice * 0.6).toFixed(2)));
} else{ 
    console.log("Prezzo pieno:", ticketPrice)
    
}

