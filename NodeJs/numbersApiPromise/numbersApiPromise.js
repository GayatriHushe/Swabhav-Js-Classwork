function numbersApiService(input) {
    return new Promise(function(resolve, reject) {
        console.log("inside promise ", input);
        var xhr = new XMLHttpRequest()
        var output;
        xhr.addEventListener("load", function() {
            output = xhr.responseText;
            document.getElementById("text").innerHTML = output;
            if (output) {
                resolve({ success: output })
                return;
            }
            reject({ error: 'Something wrong' })
        })
        xhr.open("GET", "http://numbersapi.com/" + input)
        xhr.send();

    })
}

document.getElementById('getFact').addEventListener("click", function() {
    numbersApiService(document.getElementById("myNumber").value)
        .then(function(output) {
            console.log("success happened ", output)
        })
        .catch(function(error) {
            console.log("error happened ", error)
        });
    console.log("end of program")
})




/*
var result = numbersApiService.fetchFacts(10)
console.log(result)
*/

//console.log(numbersApiService.fetchFacts(10))

//async function calls are defered execution, delayed execution
//some point in future
// async functions should be not console.log()