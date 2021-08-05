const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const saveMarkDown = require("./utils/saveMarkDown");
const open = require('open');

async function main() {
    // ask questions
    const answers = await inquirer.prompt(questions);
        // generate markdown from answers
        const markDown = generateMarkdown(answers);
    // save file
    const fileName = await saveMarkDown(markDown);
    open(fileName)
}
main();