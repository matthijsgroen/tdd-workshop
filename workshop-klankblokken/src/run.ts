import readline from "readline";
import type { Classification } from "./wordlist";

const addClassificationToSentence = (
  sentence: string,
  classifyWord: (input: string) => Classification
): Classification => {
  let result: Classification = [];
  let currentWord = "";
  //return [["anders", zin]];
  for (const char of sentence) {
    if (/\w|[éè]/.test(char)) {
      currentWord += char;
    } else {
      if (currentWord.length > 0) {
        result = result.concat(classifyWord(currentWord));
        currentWord = "";
      }
      result.push(["anders", char]);
    }
  }
  if (currentWord.length > 0) {
    result = result.concat(classifyWord(currentWord));
    currentWord = "";
  }
  return result;
};

const reset = "\u001b[0m";
const show: Record<string, (input: string) => string> = {
  korteKlinker: (klinker) => "\u001b[97;48;5;22m " + klinker + " " + reset,
  speciaal: (speciaal) => "\u001b[97;45m " + speciaal + " " + reset,
  langeKlinker: (langeKlinker) => `\u001b[30;43m ${langeKlinker} ` + reset,
  tweeKlank: (tweeKlank) => `\u001b[97;41m ${tweeKlank} ` + reset,
  letterGroep1: (letterGroep) => `\u001b[30;47m ${letterGroep} ` + reset,
  letterGroep2: (letterGroep) => `\u001b[30;47m ${letterGroep} ` + reset,
  rest: (rest) => `\u001b[97;44m ${rest} ` + reset,
  stommeE: (klank) => `\u001b[97;48;5;202m ${klank} ` + reset,
  anders: (tekens) => tekens,
};

const formatWord = (
  sentence: string,
  classifyWord: (input: string) => Classification
): string => {
  const classifiedSentence = addClassificationToSentence(
    sentence,
    classifyWord
  );

  return classifiedSentence
    .map(([classification, sentence]) => show[classification](sentence))
    .join("");
};

export const main = async (classifyWord: (input: string) => Classification) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const closeApp = () => {
    console.log(`\n${formatWord("bedankt", classifyWord)}!`);
    process.exit(0);
  };

  rl.on("close", closeApp);
  while (true) {
    await new Promise((resolve) => {
      rl.question("Geef een woord:", function (word) {
        const cleanedInput = word.trim();
        if (cleanedInput.length > 0) {
          console.log(formatWord(cleanedInput, classifyWord));
          resolve("");
        } else {
          closeApp();
        }
      });
    });
  }
};
