const fs = require('fs')

// const files = fs.readdirSync("./") 
// fs.readdir('../../',function(err,files){
//    if(err){
//     console.log(err)
//    }
//    else{
//     console.log(files)
//    }
// })


// console.log(fs.mkdirSync('./temp'))   //to create a directory
console.log(fs.rmdirSync('./newtemp'))   // to delete  directory
// console.log(fs.renameSync('./temp','./newtemp'))   // to rename a directory
// console.log(fs.writeFileSync('./newtemp/hello.txt','Hello from file hello.txt'))  to create a new file inside dir and write something in it
// console.log(fs.renameSync('./newtemp/hello.txt','./newtemp/first.txt'))   // to rename a new file inside dir 
//  console.log(fs.unlinkSync('./newtemp/first.txt'))  // to delete a file inside a dir



//console.log(files)