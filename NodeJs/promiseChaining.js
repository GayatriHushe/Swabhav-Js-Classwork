function add(a, b) {
    return new Promise(function(resolve, reject) {
        console.log("inside promise ");
        setTimeout(function() {
            resolve(a + b);
        }, 2000)


    })
}

add(1, 2)
    .then(function(sum) {
        console.log(sum);
        return add(sum, 5);
    })
    .then(function(sum2) {
        console.log(sum2);

    })
    .catch(function() {
        console.log("Error")
    })
console.log("end")