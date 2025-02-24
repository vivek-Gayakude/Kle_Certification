
// function Details(){
//     this.name = "vivek";
//     this.age = "21";
//     this.address = "Bedkihal"
// }

// let user = new Details();
// console.log(user.name);

// custom constructor function
function Details(naam,umar,isthan){
    this.name = naam;
    this.age = umar;
    this.address = isthan;
    this.description = function(){
        return(`my name is ${this.name} and my age is ${this.age}`)
    }
}

let user = new Details("mike",20,"hawkins");
let user1 = new Details("harry",17,"hogwords");
//console.log(user);
console.log(user.description());
//console.log(user1);
console.log(user1.description());
