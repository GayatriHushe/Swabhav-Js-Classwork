var numberList = [1, 2, 3, 4, 5]

function square(no) {
    return Math.pow(no, 2);
}

function cube(no) {
    return Math.pow(no, 3);
}

function add10ToEach(no) {
    return no + 10;
}


function mapNo(arr, method) {
    var output = []
    arr.forEach(element => {
        output.push(method(element));
    });
    return output;
}

console.log(mapNo(numberList, cube));