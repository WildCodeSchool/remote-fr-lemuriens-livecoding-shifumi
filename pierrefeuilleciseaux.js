const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pierre = "shi";
const feuille = "fu";
const ciseaux = "mi";
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

  if (humanAnswer === robotChoice) {
    console.log(chalk.bgGray('égalité'));
  } else if (
    (humanAnswer === pierre && robotChoice === ciseaux) ||
    (humanAnswer === feuille && robotChoice === pierre) ||
    (humanAnswer === ciseaux && robotChoice === feuille)
  ){
    console.log(chalk.bgGreen("Gagné"));
  } else {
    console.log(chalk.bgRed("Perdu"));
  }

  rl.close();
});
