//Js is synchronous
/*Asynchronous patterns
 
To execute doSomething asynchronously ==> wrap in setTimeout callback and give 0 interval

Event Loop : Interacting with rich and poor

*/
function doSomething(input, successCallbackFunction, errorCallbackFunction) {
    //Async
    //No cpu intensive like loops
    setTimeout(function() {
        var result = Math.random() * input;
        console.log(result);
        if (result > 5) {
            successCallbackFunction({ success: result });
            return;
        }
        errorCallbackFunction({ error: "Something is wrong" });

    }, 0);
}

/*
function doSomething(input, successCallbackFunction, errorCallbackFunction) {
    var result = Math.random() * input;
    console.log(result);
    if (result > 5) {
        successCallbackFunction({ success: result });
        return;
    }
    errorCallbackFunction({ error: "Something is wrong" });
}
*/

console.log(doSomething(10, function(data) { console.log("success happened : ", data) }, function(err) { console.log("error happened : ", err) }));
console.log("End of main");