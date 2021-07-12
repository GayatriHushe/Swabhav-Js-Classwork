//Constructor pattern

function Customer(id, name) {
    //console.log(this)
    var _id, _name;

    if (id > 0)
        _id = id

    if (name != "")
        _name = name

    this.foo = "I am foo"

    this.setName = function(name) {
        if (name != "")
            _name = name
    }

    this.getName = function() {
        return _name;
    }

    this.getId = function() {
        return _id;
    }
}

console.log("Customer 1 : ")
var c1 = new Customer(1, "abc");
console.log(c1)

console.log("Customer 2 : ")
var c2 = new Customer(2, "def");
console.log(c2)
    /*
    console.log({ c1 })
    c1.setName("Gayatri")
    console.log({ c1 })
    console.log(c1.getName())
    console.log(c1.getId())
    console.log(c1.foo)
    console.log({ c1 })
     */