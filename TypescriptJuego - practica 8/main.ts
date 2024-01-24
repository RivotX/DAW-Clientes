import * as readlineSync from "readline-sync";

function main() {
  let miArray: string[] = [
    "Xx_SorceressEvelynn_xX",
    "GigaIsaac",
    "Th3_J4V1_PRO",
    "PastPerfect",
    "CriptoSister",
  ];

  const userInput = readlineSync.question("Ingresa algo: ");

  console.log(`Ingresaste: ${userInput}`);
}

main();
