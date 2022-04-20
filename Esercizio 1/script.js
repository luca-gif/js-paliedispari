/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input */

const parola = prompt("Scrivi una parola");

console.log(isPalindroma(parola));

function isPalindroma(str) {
    const ParolaReverse = parola.split("").reverse();
    let messaggio = "è palindroma";

    for (let i = 0; i < parola.length; i++) {
        if (parola[i] !== ParolaReverse[i]) {
            messaggio = "non è palindroma";
        }
    }
    return messaggio;
}