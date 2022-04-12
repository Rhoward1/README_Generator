const inquirer = require("inquirer");

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
        name: "contributionGuidelines",
        message: "What are the Contribution Guidelines?"
      },
      {
        type: "input",
        name: "testInstructions",
        message: "What are the test instructions?"
    },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT","placeholder","None"]

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
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
