#! /usr/bin/env node
import inquirer from "inquirer";
import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";
console.log(chalk.bgCyan.yellowBright.bold(">>>>>>>>>>>>>>>  Wellcome To Rashid's TO DO LIST <<<<<<<<<<<<<<<"));
let list = [];
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: "add",
            message: (chalk.yellowBright.bold("What do you want to add in TO DO LIST? Please select an option below")),
            choices: [
                "Add something in TO DO",
                "View List",
                "Delete Something",
                "Exit",
            ],
        },
    ]);
    if (answers.add === "Add something in TO DO") {
        let input = prompt(chalk.greenBright.bold("please Enter what do You want to add in To do List: "));
        list.push(input);
        for (let element of list) {
            console.log(list.indexOf(element) + ": " + element);
        }
    }
    else if (answers.add === "View List") {
        for (let item of list) {
            console.log(list.indexOf(item) + ": " + item);
        }
    }
    else if (answers.add === "Delete Something") {
        for (let element of list) {
            console.log(list.indexOf(element) + ": " + element);
        }
        let delIndex = Number(prompt(chalk.redBright.bold('Please enter index number of item which you want to delete.')));
        console.log(chalk.blueBright.bold(`index No: ${delIndex} , is Successfully deleted.`));
        list.splice(delIndex, 1);
        console.log(chalk.greenBright.bold(`Updated list is : `));
        for (let element of list) {
            console.log(list.indexOf(element) + ": " + element);
        }
    }
    else {
        console.log(chalk.greenBright.bold('>>>>>>>>>>  Thanks for Using TO DO LIST.  <<<<<<<<<<'));
        condition = false;
    }
}
