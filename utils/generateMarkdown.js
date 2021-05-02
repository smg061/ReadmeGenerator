
// import the license object
const {licenses} = require('./licenses');

// return the appropiate badge from the licenses object by searching through the license name
function renderLicenseBadge(license) 
{
    for (let licenseObj of licenses) 
    {
        if (licenseObj.type == license) 
        {
            return licenseObj.badge;
        }
    }
}

// return the appropriate license link
// If there is no license, return an empty string
function renderLicenseSection(license, user) 
{
    if (license == "None") 
    {
        return "";
    }

    for (let licenseObj of licenses) 
    {
        if (licenseObj.type == license && licenseObj.type != "None") 
        {
            // return the license text with the plaeholder replaced with the github username
            return licenseObj.licenseText.replace("<COPYRIGHT HOLDER>", user);
        }
    }
}

// generate markdown file
function generateMarkdown(data)
 {
     // generate the document's badge, TOC, and license section
    let badge = renderLicenseBadge(data.license);
    let TOC = generateTableofContents();
    let licenseSectionContent = renderLicenseSection(data.license, data.github)

    // concatenate all the answers into a string
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
## License <a name="license"></a>\n ${licenseSectionContent}
`.trim();
    return content;
}

function generateTableofContents()
{
    let TOC =
`Table of Contents\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [Contributing Guidelines](#contributing)\n
* [Testing Instructions](#tests)\n
* [Questions](#questions)\n
* [License](#license)\n`;

    return TOC.trim();
}

module.exports = generateMarkdown;
