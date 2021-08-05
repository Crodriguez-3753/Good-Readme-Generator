function generateMarkDown (info) {
    const markdown = `
    amazing markdown 🌎
    #${info["project-repo"]}

    `;
    
    return markdown;
}

module.exports = generateMarkDown