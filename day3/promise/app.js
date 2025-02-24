let promise = new Promise(function(resolve,reject){
    console.log("wait for promise");
    setTimeout(function(){
        let data = "promise is resolved, data mil gaya";
        let err = 'promise is rejected';
        resolve(data);
    },2000)

})
promise.then(function(){
    console.log(data);
}).catch(function(err){
    console.log(err);
})