const fs = require('fs')

async function readFromFile(fileName) {
    return fs.promises.readFile(fileName).then(result => JSON.parse(result));
}


async function getData(path, propertyName) {
    return await readFromFile(path).then(result => {
        if (result.hasOwnProperty(propertyName)) {
            return result[propertyName]
        }
    })
}


async function printValue(path, name) {
    return await getData(path, name).then(result => console.log(result))
}

//
// ////////////////////////////////
printValue('./data.json', 'dummy')
printValue('./data.json', 'inexistent')