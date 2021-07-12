var numberList = [10, 20, 30, 40, 50]

function isOdd(no) {
    return no % 2 != 0;
}

function add10ToEach(no) {
    return no > 25;
}


function mapNo(arr, method) {
    output = []
    arr.forEach(element => {
        if (method(element))
            output.push(element);
    });
    return output;
}

console.log(mapNo(numberList, add10ToEach));