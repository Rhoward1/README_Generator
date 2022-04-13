// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {

  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}



    ${data.license}
## Table of Contents
*[Description](#description)
*[Installation Info](#installationInfo)
*[Usage Information](#usageInfo)
*[Test Instructions](#testInstructions)
*[Contributors](#contributionGuidelines)

*[Contact Me](#Contact-Information)
  
## Description
${data.description}
  
## Installation
${data.installationInfo}
  
## Usage
${data.usageInfo}
## License
${data.license}
## Contribution
${data.contributionGuidelines}
  
## How to Test
${data.testInfo}
  
## Contact-Information
[Github Profile](https://github.com/${data.username})
${data.email}
`;
  }
}
module.exports = generateMarkdown;
