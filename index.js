const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: "description",
        message: "Write a brief description of your project",
    },
    {
        type: 'type',
        name: "useage",
        message: "Briefly describe the useage of this project",
    },
    {
        type: 'type',
        name: "contribute",
        message: "Please include contribution guidelines.",
    },
    {
        type: 'input',
        name: "test",
        message: "Write your test instructions.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "chose the appropriate license for this project:",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "open"
        ]
    },
    {
        type: 'input',
        name: "livelink",
        message: "Does your Repo have a live link? If so insert it here, if not hit return to skip.",
    },
    {
        type: 'input',
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: 'input',
        name: "test",
        message: "What command should be run to run tests?",
        default: "node index",
    },
    {
        type: 'input',
        name: "github",
        message: "What is your Github username.",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email address.",
    },
];

// function to write README file
function writeToFile(README, info){
    return fs.writeFileSync(path.join(process.cwd(), "README.md"), info);
}

// function to intialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("Readme.md", generateMarkdown({...inquirerResponses}));
    })
};

// function call to intialize program
init();