// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license){
    if (license !=="None") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
}

function renderLicenseLink(license) {
    if (license !=="None"){
        return (
            `\n*[License](#license) \n`
        )
    }
    return''
    
}

function renderLicenseSection(license) {
    if (license !=="None") {
        return (
            `## License
            
            This project is licensed under the ${license} license.`
        )
    }
    return ''
}

// function to generate markdown for README
function generateMarkdown (info) {
    return `
    ${renderLicenseBadge(info.license)}

    ## ${info.title}

    ${info.livelink}

    ## Description
    ${info.description}

    ## Table of Contents
    *[Installation](#installation)

    *[Usage](#usage)

    ${renderLicenseLink(info.license)}

    *[Contribute](#contribute)

    *[Test](#test)

    *[Questions](#questions)

    ## Installation
    To install the dependencies, run the following command(s): ${info.installation}

    ## Useage
    ${info.useage}

${renderLicenseSection(info.license)}

    ## Contribute
    ${info.contribute}

    ## Test

    To run test, run the following command: ${info.test}
<br>

    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${info.email}. You can find more of my work at https://github.com/${info.github}.`;

        
}

module.exports = generateMarkdown