const fs = require('fs/promises')

const saveMarkDown = (str) => {
    fs.writeFile(Date.now() + '_markDown.md', str)
    .then(function(){
        console.log ('File saved')
    })
    .catch(console.log)
};
 
module.exports = saveMarkDown;