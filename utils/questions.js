const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: "description",
        message: "Write a brief description of your project.",
    },  
    {
        type: 'input',
        name: "install",
        message: "Explain how you installed the project.",
    },  
    {
        type: 'input',
        name: "useage",
        message: "Briefly describe the useage of this project.",
    },
    {
        type: 'input',
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
        name: "username",
        message: "What is your Github username.",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email address.",
    },
];

module.exports = questions