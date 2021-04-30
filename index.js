// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What is the name of the project?", 
    "Provide a description of the project",
    "What are the installation instructions? ", 
    "Choose a license for this project",
    "Describe the usage guidelines of this project",
    "Describe the contribution guidelines for this project",
    "Describe the instructions to test this program",
    "What is your github username?",
    "What is an email where users can contact you for questions"

]
const licenses = [
    "Apache License 2.0",
    "MIT license", 
    "GNU General Public License v3.0",
    "None" 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, (err) => 
    {
        if (err) { console.log(err); }
        else { console.log("Successfully generated readme.md"); }
    })
}

// TODO: Create a function to initialize app
function init() 
{
    inquirer
    .prompt([
        {
            type: 'input',
            name: "title",
            message: questions[0],
        },
        {
            type: 'input',
            name: "projectDescription",
            message: questions[1],
        },
        {
            type: 'input',
            name: "instructions",
            message: questions[2],
        },
        {

            type:"list",
            name: "license",
            message: questions[3],
            choices: licenses,
        },
        {
            type: 'input',
            name: "usage",
            message: questions[4]
        },
        {
            type: 'input',
            name: "contribution",
            message: questions[5]
        },
        {
            type: 'input',
            name: "testing",
            message: questions[6]
        },
        {
            type: 'input',
            name: "github",
            message: questions[7]
        },
        {
            type: 'input',
            name: "email",
            message: questions[8]
        }
    ])
    .then((data) => {
        let markdownContent = generateMarkdown(data);
        writeToFile("./readme.md", markdownContent);
    });

}

// Function call to initialize app
init();
