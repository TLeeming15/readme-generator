// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require('./genReadMe')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a brief description of your Project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation requirements and instructions?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the details of your contributors?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-mail?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add a link to your website here',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add tests',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
];

function getAnswers (){
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = MarkDown.generateReadme(answers)
            fs.writeFile("README.md", mark, function(err){
                if(err){
                    console.log("Unable to save file")
                }else{
                    console.log("Success: new README.md file has been created in your current folder")
                }
            })
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

getAnswers()

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
