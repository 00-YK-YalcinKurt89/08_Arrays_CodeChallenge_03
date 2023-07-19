
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:

output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
    const GAP = " ";
    const PUNCT = ".";
    const question = "?";
    const exclamation = "!"

    let sentence = prompt("Bitte gebe S, Q oder E ein:")

    switch (op) {
        case "S":
            return arr.join(GAP) + PUNCT;
            break;
        case "Q":
            return arr.join(GAP) + question;
            break;
        case "E":
            return arr.join(GAP) + exclamation;
    }
   
     
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}