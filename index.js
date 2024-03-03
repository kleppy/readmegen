const inquirer = require('inquirer');
const fs = require('fs');
const createReadme = require("./scripts/createReadme")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


//const tableContents = "(#title)\n(#description)\n(#installation)\n(#usage)\n(#testing)\n(#contributions)\n(#questions)"
// create inquirer prompts with error validation.

function promptUser() {
    return inquirer.prompt([
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

  {
        type: 'input',
        message: 'what is your email address??',
        name: 'email',
        validate: function (resp) {
            if (resp.length < 1) {
                return console.log("Email needs to be added");
            }
            return true;
      },
    },

  {
        type: 'input',
        message: 'what is your github username?',
        name: 'github',
        validate: function (resp) {
            if (resp.length < 1) {
                return console.log("Github username needs to be added");
            }
            return true;
      },
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]}
    

  ]);
}
  // Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = createReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./files/README.md', generateContent);
        console.log('✔️ wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }


  
init();  



 // .then((response) => {
// output requires newlines between sections. 
 // fs.appendFile('./files/README.md', `${tableContents}\n#Title \n${response.title} \n##Description \n${response.description} \n##Instalation \n${response.installation} \n##Usage \n${response.usage} \n##Contribution \n${response.contrib} \n##Testing \n${response.testing} \n##Questions \n ${response.email} \n (github.com/${response.github}`, (err) =>
 //   err ? console.error(err) : console.log('Success!'))
//}
 // );
  
