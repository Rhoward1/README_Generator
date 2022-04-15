// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "No License";
  }

  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license === "Apache License 2.0") {
    return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  if (license === "GNU General Public License (GPL)") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }

  if (license === "Mozilla Public License (MPL)") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  }

  if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)`


  }
}
  // // TODO: Create a function that returns the license link
  // // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "None") {
      return "No License";
    }

    if (license === "MIT License") {
      return `[MIT](https://opensource.org/licenses/MIT)`
    }

    if (license === "Apache License 2.0") {
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
    }

    if (license === "GNU General Public License (GPL)") {
      return `[GNU General Public v3](https://www.gnu.org/licenses/gpl-3.0)`
    }

    if (license === "Mozilla Public License (MPL)") {
      return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`

    }

    if (license === "The Unlicense") {
      return `[Unlicense](http://unlicense.org/)`

    }
  }

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

## Questions

- If you have any questions about the repo, open an issue or contact me on Github or by Email.
### Contact Information
- Github [${data.gitHubUsername}](https://github.com/${data.gitHubUsername})
  - Email at ${data.email}


## License Statement
- This application is covered by the ${renderLicenseBadge(data.license)} license.
- Visit ${renderLicenseLink(data.license)} for more information.
`};

    

       module.exports = generateMarkdown; 

