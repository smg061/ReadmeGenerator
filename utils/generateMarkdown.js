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
## Installation Instructions <a name="installation"></a>
${data.instructions}
## Usage Information <a name="usage"></a>
${data.usage}
## Constribution Guidelines <a name="contributing"></a>
${data.contribution}
## Testing Instructions <a name="tests"></a>
${data.testing}
## Questions <a name="questions"></a>
My Github profile can be found [here](https://github.com/${data.github}). 
You can reach me at: ${data.email}
`.trim();

    return content;
}

function generateTableofContents()
{
    let TOC =
`* Table of Contents\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [License](#license)\n
* [Contributing Guidelines](#contributing)\n
* [Testing Instructions](#tests)\n
* [Questions](#questions)\n`;
    return TOC.trim();

}

module.exports = generateMarkdown;
