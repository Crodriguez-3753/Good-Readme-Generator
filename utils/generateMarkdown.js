function generateMarkDown (info) {
    const markdown = `
amazing markdown 🌎
#${info["repoName"]}
`;
    
    return markdown;
}

module.exports = generateMarkDown