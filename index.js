const inquirer = require('inquirer');
const fs = require('fs');
// create inquirer prompts with error validation.
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your repository?',
      name: 'title',
      validate: function (resp) {
        if (resp.length < 1) {
            return console.log("You need a title");
        }
        return true;
    }
    },
    
    {
      type: 'input',
      message: 'What is the description of your repository?',
      name: 'description',
      validate: function (resp) {
        if (resp.length < 1) {
            return console.log("You need a description");
        }
        return true;
    }
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your repository?',
        name: 'installation',
        validate: function (resp) {
            if (resp.length < 1) {
                return console.log("You need install instructions");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: 'How do you use the application?',
        name: 'usage',
        validate: function (resp) {
            if (resp.length < 1) {
                return console.log("You need a usage description");
            }
            return true;
      },
    },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contrib',
        validate: function (resp) {
            if (resp.length < 1) {
                return console.log("You need guidelines more than anyone I've ever met. ");
            }
            return true;
      },
    },
      {
        type: 'input',
        message: 'How do you test the application?',
        name: 'testing',
        validate: function (resp) {
            if (resp.length < 1) {
                return console.log("How even do you test this?");
            }
            return true;
      },
    },

  ])

  .then((response) => {
// output requires newlines between sections. 
  fs.writeFile('./files/README.md', `#${response.title} \n##Description \n${response.description} \n##Instalation \n${response.installation} \n##Usage \n${response.usage} \n##Contribution \n${response.contrib} \n##Testing \n${response.testing}`, (err) =>
    err ? console.error(err) : console.log('Success!'))
}
  );
  
