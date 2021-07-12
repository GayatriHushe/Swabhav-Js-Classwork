console.log(x); //undefined
getName(); //Inside function
console.log(getName); //[Function: getName]

var x = 7;

function getName() {
    console.log("Inside function");
}

console.log(x); //7
getName(); //Inside function
console.log(getName); //[Function: getName]