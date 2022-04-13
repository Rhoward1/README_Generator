// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input


inquirer
    .prompt([
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
            name: "testInstructions",
            message: "What are the test instructions?"
        },
        {
            type: "input",
            name: "contributionGuidelines",
            message: "What are the Contribution Guidelines?"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT License", "The Unlicense", "None"]

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
    ])
    
    .then((answers) => { 
        console.log(answers); 
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    })

        // Use user feedback for... whatever!!
    
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });




// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
