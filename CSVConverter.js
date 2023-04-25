const fs = require('fs');


const readCSV = (filePath) => {
    let localData= fs.readFileSync(filePath, 'utf8')
    const toArray = localData.split('\n')
    let headers = toArray[0].split(',')

    let data = []
    for (let i = 1; i < toArray.length; i++) {
        let items = toArray[i].split(',')
        let dataItem = {}
        for (let j = 0; j < headers.length; j++) {
            dataItem[headers[j].trim()] = items[j]
        }
        data.push(dataItem)
    }// O(n^2)
    return data
}

const saveToFile = (pathName, data) => {
    fs.writeFileSync(pathName, JSON.stringify(data))
}

const readJSONFile = (path) => {
    const JSONData = fs.readFileSync(path, 'utf-8')
    console.log(JSON.parse(JSONData))
}


module.exports.saveToFile = saveToFile
module.exports.readCSV = readCSV
module.exports.readJSONFile = readJSONFile
