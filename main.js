const CSVreader = require('./CSVConverter')

const main = () =>{
    CSVreader.saveToFile('users.json', CSVreader.readCSV('users.csv'))
    CSVreader.readJSONFile('users.json')
}

main()