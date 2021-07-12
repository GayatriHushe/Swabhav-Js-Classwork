function Customer(id, name) {
    this.id = id;
    this.name = name;
}
Customer.prototype.getDetails = function() {
    return "name of customer is " + this.name + " id of customer is " + this.id;
}

var c1 = new Customer(1, "abc");
console.log(c1)

var c2 = new Customer(2, "def");
console.log(c2)

console.log(c1.getDetails())
console.log(c2.getDetails())

console.log(c1.__proto__ == Customer.prototype)
console.log(c2.__proto__ == Customer.prototype)
console.log(c1.__proto__ == c2.__proto__)

console.log(Customer.prototype.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__)

Object.prototype.toString = function() {
    return "toString";
}
console.log(c1.toString())
console.log(c1.__proto__)