const express = require('express');
const app = express();


//middlewere
// app.use('/home',(req,res // console.log(req);
//     res.send('<h1>response from server</h1>');
//     console.log(res);
// })) =>{

    // app.get('/thakgaaye',(req,res)=>{
    //     res.send('<h1> response from may root-> thakana mana hai </h1>');
    // })

    app.get('/changes',(req,res)=>{
        res.send('<h1> My name => peter parkar </h1>');
    })
   
    app.get('/heyy',(req,res)=>{
        res.send('<h1> My name => jon </h1>');
    })
   
app.listen(8080,()=>{
    console.log('Server is running at port 8080');
}) 