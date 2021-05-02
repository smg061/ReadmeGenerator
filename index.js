
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for the prompt

// licenses to choose from during the prompt
const licenses = [
    "None", 
    "Apache License 2.0",
    "MIT license", 
    "GNU General Public License v3.0",
    "GNU Affero General Public License v3.0",
    "Creative Commons",
    "Mozilla Public License",
    "Unlicense"
];

// prompts to be used in the program
const prompts = [{
    type: 'input',
    name: "title",
    message: "What is the name of the project?",
},
{
    type: 'input',
    name: "projectDescription",
    message: "Provide a description of the project",
},
{
    type: 'input',
    name: "instructions",
    message: "What are the installation instructions? ",
},
{
    type:"list",
    name: "license",
    message: "Choose a license for this project",
    choices: licenses,
},
{
    type: 'input',
    name: "usage",
    message: "Describe the usage guidelines of this project"
},
{
    type: 'input',
    name: "contribution",
    message: "Describe the contribution guidelines for this project"
},
{
    type: 'input',
    name: "testing",
    message:"Describe the instructions to test this program"
},
{
    type: 'input',
    name: "github",
    message: "What is your github username?"
},
{
    type: 'input',
    name: "email",
    message: "Provide an email where users can contact you for questions"
}];



function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, (err) => 
    {
        if (err) { console.log(err); }
        else { console.log("Successfully generated readme.md"); }
    })
}

function init() 
{
    inquirer
    .prompt(prompts)
    .then((data) => {
        let markdownContent = generateMarkdown(data);
        writeToFile("./sample_readmes/readme.md", markdownContent);
    });

}

// Function call to initialize app
init();
