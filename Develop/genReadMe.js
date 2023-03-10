class MarkDown {
// License badges
    static licenseBadge(license){
        const badges = {
            mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses?MIT)",
            isc:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            gnugplv3:"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lpgl-3.0"
        }
        return badges[license]
    }
// Links to learn more about the chosen license
    static createLicenseLink(license){
        const licenseLinks = {
            mit: "[MIT](https://choosealicense.com/licenses/mit/)",
            isc: "[ISC](https://choosealicense.com/licenses/isc/)",
            gnugplv3: "[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)"
        }
        return licenseLinks[license]
    }
    // Generates README.md with the answers from user input. Also links for the table of contents and Github.
    static generateReadme(answers){
        return `
 # ${answers.title}

 ${this.licenseBadge(answers.license)}
        
## Table of Contents
 - [Project description](#description)
 - [Usage](#usage)
 - [Tests](#tests)
 - [Installation](#installation)
 - [Contributing](#contributing)
 - [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Usage
${answers.usage}

## Tests
${answers.tests}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

## Questions
${answers.email}
[Click here to see ${answers.github}'s Github](https://www.github.com/${answers.github})

## License
${this.createLicenseLink(answers.license)}
        
        `
    }
}

module.exports = MarkDown