var listaCognomi = ["Bianchi", "Rossi", "Esposito", "Berlusconi"];

console.log(listaCognomi);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);


listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

listaCognomi.sort();
console.log(listaCognomi);

// for (var i = 0; i < listaCognomi.length; i++) {
//     if (cognomeUtente == listaCognomi[i]) {
//     console.log('Il tuo cognome si trova in posizione ' + (i+1))}
// }

var i = 0;
do {
    if (listaCognomi[i] == cognomeUtente) {
    }
    i++;
} while (listaCognomi[i] != cognomeUtente);
console.log('Il tuo cognome si trova alla posizione: ' + (i +1));
