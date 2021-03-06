// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

// const promptQuestions = () => {

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project?"
    },
    {
        type: "input",
        name: "installationInfo",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usageInfo",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "image",
        message: "What is the filename of your image?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What are the test instructions?"
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Were there any contributers?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT License","Apache License 2.0", "GNU General Public License (GPL)", "Mozilla Public License (MPL)","The Unlicense", "None"]

    },
    {
        type: "input",
        name: "gitHubUsername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

    /* Pass your questions in here */
];



// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => writeFile("README.md", generate(answers)))
        .catch((err) => console.log(err));
}

// Function call to initialize app
init();
