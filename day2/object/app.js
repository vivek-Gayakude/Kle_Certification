//Object

// let person = {
//     name : 'vivek',
//     age : 20,
//     favcolor :'red',
//     place :'Bedkihal',
//     favSeries :'Strangerthings'
// }

// console.log(person);
// console.log(person);

// console.log(person.age);
// console.log(person)[1];
// console.log(person['age']);

// change propeties in Object

// person.name ='Vivek Gayakude'
// console.log(person);

// // adding new property 
//  person.gender='male';
//  console.log(person);

// //  delete property 
// delete person.favcolor;
// console.log(person);

// advance Object

let person = {
    name : 'vivek',
    age : 20,
    favcolor :'red',
    place :'Bedkihal',
    favSeries :'Strangerthings',
    fun: function print(){
        return (`my name is ${this.name} and my age is${this.age}`);
    },
    newjob:{
        gender :"male",
        address :"Bedkihal",
    }
}

console.log(person.newjob.address);