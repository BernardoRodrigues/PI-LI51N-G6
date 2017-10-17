const fs = require('fs');

function getApi(filename) {
    return fs.readFileSync(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        return data.toString();
    })
}

module.exports = (filename = null) => {
    return {
        key: filename !== null ? getApi(filename) : 'You have to provide a path to your API Key file'
    }
};