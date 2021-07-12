//node js
(function() {

    var counter;

    function f1() {
        for (counter = 1; counter <= 10; counter++) {
            console.log(counter)
        }
        console.log(counter)
    }
    f1();
    console.log(counter)

}()); //first invoke then wrap