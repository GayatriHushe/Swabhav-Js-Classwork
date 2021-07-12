function makeCustomer() {
    var customer = {}
    var _id, _name;
    customer.setId = function(id) {
        this._id = id;
    }
    customer.setName = function(name) {
        this._name = name;
    }
    customer.getDetails = function() {
        return "Customer name : " + this._name + " Customer id : " + this._id;
    }

    return customer;
}


var c1 = makeCustomer(); //creates object without this
c1.setId(101);
c1.setName("Gayatri");
console.log(c1.getDetails())
console.log(c1)