// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = [
    "None",
    "Apache License 2.0",
    "MIT license", 
    "GNU General Public License v3.0",
];

function renderLicenseBadge(license) 
{
     
    if(license == "None") 
    {
        return "";
    }

    else if (license == licenses[1])
    {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }

    else if(license == licenses[2])
    { 
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }

    else if (license == licenses[3]) 
    {

        return " [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
    }

}

function renderLicenseLink(license) 
{


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
 {
    let badge = renderLicenseBadge(data.license);
    let TOC = generateTableofContents();
    let content = 
`# ${data.title}\n
${badge}\n
${data.projectDescription}\n
## ${TOC}
## Installation Instructions <a name="installation"></a>
${data.instructions}\n
## Usage Information <a name="usage"></a>
${data.usage}\n
## Constribution Guidelines <a name="contributing"></a>
${data.contribution}\n
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
`Table of Contents\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [License](#license)\n
* [Contributing Guidelines](#contributing)\n
* [Testing Instructions](#tests)\n
* [Questions](#questions)\n`;
    return TOC.trim();

}

module.exports = generateMarkdown;
