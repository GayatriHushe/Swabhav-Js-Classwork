var service = function() {
        var obj = {}
        console.log("service called");

        obj.doSomething1 = function() {
            console.log("Doing something1")
        }
        obj.doSomething2 = function() {
            console.log("Doing something2")
        }
        obj.doSomething3 = function() {
            console.log("Doing something3")
        }

        return obj;
    }() //function call immediately

//service should be loaded once
service.doSomething1();
service.doSomething2();
service.doSomething3();

//jQuery or $
// angular.module()
//angular.controller()