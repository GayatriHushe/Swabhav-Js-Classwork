var values = [1, 2, 3, 4, 5, 6]
var count = [0, 0, 0, 0, 0, 0]
    //Random numbers
function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
}


for (let index = 1; index <= 10; index++) {
    var randomNumber = getRandomNumber(1, 6);
    //console.log(randomNumber)
    count[randomNumber - 1]++;
}

for (let index = 0; index < count.length; index++) {
    console.log("Count of " + values[index] + " is " + count[index]);

}
console.log("Count in form of array : " + count)