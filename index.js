const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const saveMarkDown = require("./utils/saveMarkDown");


function main() {
    // ask questions
    inquirer
    .prompt(questions)
        // generate markdown from answers
        .then(generateMarkdown)
    // save file
        .then(saveMarkDown)
}
main();