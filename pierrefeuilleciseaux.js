const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pierre = "pierre";
const feuille = "feuille";
const ciseaux = "ciseaux";
const answers = [pierre, feuille, ciseaux];

rl.question(chalk.cyan(`${pierre} ${feuille} ${ciseaux} ? `), (humanAnswer) => {
  
  if (!answers.includes(humanAnswer)) {
    console.log(chalk.bgRed("Mauvaise saisie"));
    rl.close();
    return;
  }
  console.log(chalk.cyan(`human choice : ${humanAnswer}`));

  const robotChoice = answers[Math.floor(Math.random() * answers.length)];
  console.log(chalk.yellow(`robot choice : ${robotChoice}`));

  console.log(game(humanAnswer, robotChoice));

  rl.close();
});

function game(humanAnswer, robotChoice) {
  if (humanAnswer === robotChoice) {
    return chalk.bgGray('égalité');
  }
  
  if (
    (humanAnswer === pierre && robotChoice === ciseaux) ||
    (humanAnswer === feuille && robotChoice === pierre) ||
    (humanAnswer === ciseaux && robotChoice === feuille)
  ){
    return chalk.bgGreen("Gagné");
  }
  
  return chalk.bgRed("Perdu");
}
