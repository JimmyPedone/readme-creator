// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#licence)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection() {}
//   if(license !== "None") {
//     return `## License

//       Licensed under the ${license} license.`;
//   }
//   return "";
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.licence)}

## Table of Contents
  *[Description](#description)
  *[Installation](#installationInstructions)
  *[Usage](#usage-information)
  *[Contributing](#contributionGuidelines)
  *[Test Instructions](#testInstructions)
  *[Questions](#questions)

${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installationInstructions}
## Usage
${data.usageInformation}
## Contributing
${data.contributionGuidelines}
## Tests
${data.testInstructions}
## Questions
* Name - ${data.name}
* Email - ${data.email}
* Email - [${data.creator}](https://github.com/${data.creator}/)


`;}
// ${renderLicenseSection(data.license)}
module.exports = generateMarkdown;
