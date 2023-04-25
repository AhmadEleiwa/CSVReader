const fs = require('fs');


const readCSV = (filePath) => {
    let localUsers = fs.readFileSync(filePath, 'utf8')
    const toArray = localUsers.split('\n')
    let headers = toArray[0].split(',')

    let users = []
    for (let i = 1; i < toArray.length; i++) {
        let items = toArray[i].split(',')
        let user = {}
        for (let j = 0; j < headers.length; j++) {
            user[headers[j].trim()] = items[j]
        }
        users.push(user)
    }// O(n^2)
    return users
}

const saveToFile = (pathName, users) => {
    let usersFileAsCSV = ""
    let headers = Object.keys(users[0])
    usersFileAsCSV +=headers.toString()

    usersFileAsCSV += '\n'

    for (let i=0;i<users.length; i++) {
        let newLine  = i === users.length -1 ? '': '\n'
        usersFileAsCSV += Object.values(users[i]).toString() + newLine
    } // O(n)
    fs.writeFileSync(pathName, usersFileAsCSV)
}

const readJsonFile = () => {
    console.log(users)
}
readCSV('users.csv')
readJsonFile()
users.push({
    UserName: 'Ahmad Ilawa',
    "BirthDate (MM/DD/YYYY)": '07/04/2001',
    Address: 'Jenin',
    MobileNumber: '0592679982',
    'Gender (M/F)': 'M'
})
saveToFile('file.csv', users)