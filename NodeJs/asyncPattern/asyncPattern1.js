//Js is synchronous
/*Asynchronous patterns
 */

//This is synchronous
function doSomething(input) {
    var result = Math.random() * input;
    console.log(result);
    if (result > 5) {
        return { success: result };
    }
    return { error: "Something is wrong" };
}
console.log(doSomething(10))
console.log("End of main")