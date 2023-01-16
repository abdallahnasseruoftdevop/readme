// async function generateReadme() {
// const fs = require('fs');
// const inquirer = await import('inquirer');

// inquirer
//   .prompt(questions)
//   .then(answers => {
//     const readme = `
// # ${answers.title}

// ## Description

// ${answers.description}

// ## Table of Contents

// - Installation
// - Usage
// - License
// - Contributing
// - Tests
// - Questions

// ## Installation

// ${answers.installation}

// ## Usage

// ${answers.usage}

// ## License

// ${answers.license}

// ## Contributing

// ${answers.contributing}

// ## Tests

// ${answers.tests}

// ## Questions

// ${answers.questions}
// `;

//     fs.writeFileSync('README.md', readme);
//     console.log('README generated successfully!');
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }




















async function generateReadme() {
    const fs = require('fs');
  const inquirerModule = await import('inquirer');
  const inquirer = inquirerModule.default;
  
const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?'
  },
  {
    name: 'description',
    type: 'input',
    message: 'Provide a brief description of your project:'
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Provide instructions for installation:'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Provide usage instructions for your project:'
  },
  {
    name: 'license',
    type: 'input',
    message: 'Provide the license for your project:'
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'Provide instructions for how to contribute to your project:'
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Provide instructions for how to run tests for your project:'
  },
  {
    name: 'questions',
    type: 'input',
    message: 'Provide contact information for questions about your project:'
  }
];
  inquirer.prompt(questions)
  .then(answers => {
    // rest of your code here
     const readme = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- Installation
- Usage
- License
- Contributing
- Tests
- Questions

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

${answers.questions}
`;

    fs.writeFileSync('README.md', readme);
    console.log('README generated successfully!');
  })
  .catch(err => {
    console.log(err);
  });
}

generateReadme();