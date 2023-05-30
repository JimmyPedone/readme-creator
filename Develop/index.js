//The following variables are what is required for the README generator.
  //const inquirer is installed to display questions
  //const fs is in-place which is needed anytime I'm switching files
  //const generateMarkdown pulls code from generateMarkdown.js to index.js

const inquirer = require('inquirer');
  // console.log(inquirer);
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//The following code is an array of questions that should be answered by the user to generate an already formatted README.md that is applicable to the project. 

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a description for your project.  Use the following questions to guide your thinking: What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?"
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "How should the user install the application?"
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Why would someone use this application?"
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How should engineers contribute to your project? Create steps for creating pull requests, links to external documentation, mailing lists, or a code of conduct, and community/behavioral expectations."
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Give users explicit instructions on how to run all necessary tests. Explain libraries used for testing your software and supply all necessary commands."
  },
  {
    type: "checkbox",
    name: "licence",
    message: "Select an appropriate license for your project:",
    choices: ["MIT", "Boost1.0", "Apache2.0", "None"],
  },
  {
    type: "input",
    name: "creator",
    message: "Add your GitHub username here:"
  },
  {
    type: "input",
    name: "name",
    message: "Add your full name here:"
  },
  {
    type: "input",
    name: "email",
    message: "Add your email address here:"
  },

  
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, (err) =>
  err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Created README.md File...");
    writeToFile("./Develop/README.md", generateMarkdown({ ...responses }));
  });
}
// Function call to initialize app
init();

