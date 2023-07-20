
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

    for (let i = 0; i < array.length; i++) {
        if (i != arr.length-1) {
            str += arr
            
        }
        
    }
}"use strict";
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}
const GAP = " ";
const PUNCTUATION = {S: '.', Q: '?', E: '!'}
const ERROR_PUNC = "FEHLER! Satzzeichen nicht erkannt."


/*** Funktion mit Array als Parameter */
// mögliche Tests:






/* ERSTE VARIANTE */ 

output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei",
                    "diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

// output(getSentence(["Ich","bin","Max"],"A"));

// function getSentence(arr,op) {
//     // return arr.join(GAP) + getPunctuation(op);
//     if (op in PUNCTUATION) {
//         return arr.join(GAP) + PUNCTUATION[op];
//     } else {
//         return ERROR_PUNC
//     }
// }







/** ZWEITE VARIANTE */

// function getPunctuation(op) {
//     if (op == "S") {
//         op = "."
//     } else if (op == "Q") {
//         op = "?"
//     } else if (op == "E"){
//         op = "!"
//     } else {
//         op = "";
//     }
//     return op;
// }


function getSentence(arr,op) {
    const GAP = " ";
    const PUNCT = getPunct(op);  // . ? !
    let str = ""; 

    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + PUNCT; 
        }
    }
     return str;
}

function getPunct(op) {
    switch (op) {
        case "S":
           return "."; 
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return "#";
    }
}






// Modul: Ausgabe in Konsole : Test
// output("hi"); 

function output(outputData) {
    console.log(outputData);
}