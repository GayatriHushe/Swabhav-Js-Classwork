//node js
var counter; //hoisted to top level scope i.e window scope

function f1() {
    for (counter = 1; counter <= 10; counter++) {
        console.log(counter)
    }
    console.log(counter)
}
f1();
console.log(counter)