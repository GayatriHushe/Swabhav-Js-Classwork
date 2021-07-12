//Js is synchronous
/*Asynchronous patterns
 


*/
function doSomething(input, successCallbackFunction, errorCallbackFunction) {
    var result = Math.random() * input;
    console.log(result);
    if (result > 5) {
        successCallbackFunction({ success: result });
        return;
    }
    errorCallbackFunction({ error: "Something is wrong" });
}

console.log(doSomething(10, function(data) { console.log("success happened : ", data) }, function(err) { console.log("error happened : ", err) }));
console.log("End of main");