class MarkDown {
    static generateReadme(answers){
        return `
        # $(answers.title)

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
        $(answers.license)
        
        `
    }
}

module.exports = MarkDown