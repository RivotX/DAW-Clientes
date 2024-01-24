"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function main() {
    var miArray = [
        "Xx_SorceressEvelynn_xX",
        "GigaIsaac",
        "Th3_J4V1_PRO",
        "PastPerfect",
        "CriptoSister",
    ];
    var userInput = readlineSync.question("Ingresa algo: ");
    console.log("Ingresaste: ".concat(userInput));
}
main();
