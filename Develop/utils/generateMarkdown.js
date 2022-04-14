// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
if (license === "None") {
    return "No License";
}

if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}

if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)`

}
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }



// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## License
${renderLicenseBadge(data.license)}

## Table of Contents
- [Project Description](#project-description)  
- [Installation Information](#installation-information)  
- [Usage Information](#usage-information)  
- [Test Instructions](#test-instructions)  
- [Contributors on this Project](#contributors-on-this-project)  
- [Contact Information](#contact-information)  
  
## Project Description
- ${data.description}
  
## Installation Information
- ${data.installationInfo}
  
## Usage Information
- ${data.usageInfo}
- ![](./assets/${data.image})

## Contributors on this Project
- ${data.contributionGuidelines}
- *[Contribution Guidlines](https://github.com/github/docs/blob/main/CONTRIBUTING.md)*
  
## Test Instructions
- ${data.testInstructions}
  
## Contact Information
- Contact me on Github [${data.gitHubUsername}](https://github.com/${data.gitHubUsername})
  - Email at ${data.email}
`;
}

module.exports = generateMarkdown;

