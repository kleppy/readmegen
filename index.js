const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your repository?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your repository?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your repository?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How do you use the application?',
        name: 'usage',
      },

      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contrib',
      },
      {
        type: 'input',
        message: 'How do you test the application?',
        name: 'testing',
      },

  ])

  .then((response) => {
  fs.writeFile('README.md', `#${response.title} \n ##Description \n${response.description} \n #Instalation \n ${response.installation} \n #Usage \n  ${response.usage} \n #Contribution \n ${response.contrib} \n #Testing \n ${response.testing}`, (err) =>
    err ? console.error(err) : console.log('Success!'))
}
  );
  