// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
 {

    let TOC = generateTableofContents();
    let content = 
`# ${data.title}\n
${data.projectDescription}\n
## ${TOC}
## Installation Instructions
${data.instructions}
## 
`.trim();

    return content;
}

module.exports = generateMarkdown;

function generateTableofContents()
{
    let TOC =
`Table of Contents\n
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)\n`;
    return TOC.trim();

}