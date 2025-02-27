
let fs = require('fs');

// perform CURD operation 

// let data = " hii today' s weather is cool";

// task-1 create a file  and write data into it
// fs.writeFile('demo.txt',data,{
//     encoding :'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created sucessfully");
// })

// // way2
// fs.writeFileSync('demo.txt',data,
// (err)=>{
//          if(err) throw err;
//          console.log("file is created sucessfully");
//      });

//      //read a file 
//      let fileread = fs.readFileSync('demo.txt');
//      console.log(fileread.toString());

//      // UPDATE A FILE
//      fs.appendFileSync('demo.txt','\n I hope this weather will be same for next days');

//      // delete data
//      fs.unlinkSync('demo.txt');

// create

let data = "kohli choka mar na choka "

fs.writeFile('demo.txt',data,{
    encoding :'utf-8'
},(err)=>{
    if(err) throw err;
    console.log("file is created sucessfully");
        });

// UPDATE A FILE 
fs.appendFileSync('demo.txt','\n Yee kohli kya kar raha hee choka mar na yaar',(err)=>{
    if(err) throw err;
    console.log("file is created sucessfully");
        });
