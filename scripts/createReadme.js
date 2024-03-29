// generateReadme function populating the README.md
function createReadme(answers) {
    return `
<h1 align="center">${answers.title} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contrib}

## Tests
✏️ ${answers.testing}

## Questions

<br />
:octocat: Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

  }
  
  module.exports = createReadme;
