class MarkDown {

    static licenseBadge(license){
        const badges = {
            mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses?MIT)",
            isc:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            gnugplv3:"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lpgl-3.0"
        }
        return badges[license]
    }

    static createLicenseLink(license){
        const licenseLinks = {
            mit: "[MIT](https://choosealicense.com/licenses/mit/)",
            isc: "[ISC](https://choosealicense.com/licenses/isc/)",
            gnugplv3: "[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)"
        }
        return licenseLinks[license]
    }
    static generateReadme(answers){
        return `
 # ${answers.title}

 ${this.licenseBadge(answers.license)}

## Table of Contents
 - [Project description](#Description)
 - [Usage](#Usage)
 - [Tests](#Tests)
 - [Installation](#Installation)
 - [Contributing](#Contributing)
 - [Questions](#Questions)
- [License](#License)

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
${answers.github}

## License
${this.createLicenseLink(answers.license)}
        
        `
    }
}

module.exports = MarkDown