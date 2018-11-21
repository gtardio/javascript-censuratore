//                           ***CENSURATORE***
//  - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

//                           ***FUNZIONE***

function contaParoleStringaIniziale (stringaIniziale)
{
  var paroleSeparate;
  var paroleSeparate = stringaIniziale.split(" ");
  //con .split è possibile suddividere una stringa, sulla base di un dato separatore in essa presente, al fine di ottenre un array di valori.
  console.log(paroleSeparate);
  paroleSeparate = paroleSeparate.length;
  return paroleSeparate;
}

//-------------------------------------------------------------------------------------------

var stringaIniziale = "And they say She's in the Class A Team She's stuck in her daydream";

var arrayParoleCensurate = ["Team","daydream","they","the"];


var i = 0; //contatore
var paroleDaCensurare = 0;

while (i < arrayParoleCensurate.length) {
  console.log(arrayParoleCensurate[i]);
  //legge a mano a mano le parole da censurare presenti nell'aray

  if (stringaIniziale.includes(arrayParoleCensurate[i]))
  //Il metodo includes() verifica se una stringa ne contiene un'altra desiderata, restituendo true o false in base dell'esito della ricerca
  {
    stringaIniziale = stringaIniziale.replace(arrayParoleCensurate[i], 'xxx');
    //.Replace serve a sostituire tutte le occorrenze di una stringa, simultaneamente.
    paroleDaCensurare++;
  }
  i ++;
}

var conteggioParole = contaParoleStringaIniziale (stringaIniziale);
console.log(conteggioParole);

console.log(stringaIniziale);
console.log("Il numero delle parole censurate è: " + paroleDaCensurare);
console.log("Il numero delle parole totali nella frase è: " + conteggioParole);
document.writeln(stringaIniziale);
