// resolve() and reject() => async
//promise sync
//return promise object
function doSomething(input) {
    return new Promise(function(resolve, reject) {
        console.log("inside promise ", input);
        var result = Math.random() * input;
        console.log(result)
        if (result > 5) {
            resolve({ success: result })
            return
        }
        reject({ error: 'Something wrong' })
    })
}

doSomething(10)
    .then(function(result) {
        console.log("success happened ", result)
    })
    .catch(function(error) {
        console.log("error happened ", error)
    });
console.log("end of program")

//if promise resolved call then else catch
// then and catch async (callback functn)


//check what is execution seq