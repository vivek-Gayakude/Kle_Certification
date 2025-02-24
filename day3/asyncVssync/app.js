

// sync 
// console.log("first");
// console.log("second");
// console.log("third");

// Async

// console.log("first");
// setTimeout(function(){
//     console.log("It will run after 2 seconds")
// },2000)
// console.log("third");

// setInterval()

// setInterval(function(){
//     console.log("it will run after 2 sec")
// },2000)

let count = 0;
let intervalId = setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);

    if(count === 5){
        clearInterval(intervalId);
        console.log("Task completed");
    }
},1000)