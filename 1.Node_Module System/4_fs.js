// // files

const fs = require('fs')

// // reading a file

// let filecontent = fs.readFileSync('f1.txt')

// console.log('Data of File 1: '+ filecontent)

// //Writing a file

// fs.writeFileSync('f2.txt', 'This is file 2')
// console.log('File has been written')

// //Append a file

// fs.appendFileSync('f3.txt', "This is f3")
// console.log("file has been appended")

// //deleting a file 
// fs.unlinkSync('f2.txt')
// console.log('file has been deleted')


// Directories

// Create a directory
// fs.mkdirSync('myDirectory')

// To check the content inside of a directory

// let folderPath = 'C:\\Users\\Jenish\\Desktop\\Practice Development\\THE ULTIMATE NODE COURSE\\1.Node_Module System\\myDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log("Folder Content ", folderContent)

// check ehether directory exist or not/?
 let doesExist = fs.existsSync('myDirecto')
 console.log(doesExist)

 //remove a Directory

fs.rmdirSync('mydirectory')
console.log('Dieectory has been Deleted')