const fs = require('fs');

async function write(data) {
    fs.appendFile('goo', data, err => {
        flag: 'a';
        if (err) throw Error;
    })
}

module.exports = write;
