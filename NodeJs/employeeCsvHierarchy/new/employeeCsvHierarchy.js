(function() {

    var service = function() {
        var data = {}

        data.getDataFromUrl = function() {

            return new Promise(function(resolve, reject) {

                // //Synchronous Request
                // var xmlHttp = new XMLHttpRequest();
                // xmlHttp.open( "GET", "https://swabhav-tech.firebaseapp.com/emp.txt", false ); 
                // xmlHttp.send(  );
                // var response = xmlHttp.responseText;
                // if(response){
                //     resolve(response)
                //     return
                // }
                // reject({Error:"something Went Wrong"})
                // return 


                var employeeList = new XMLHttpRequest()
                employeeList.addEventListener("load", function() {
                    if (employeeList.responseText) {
                        resolve(employeeList.responseText)
                        return
                    }
                    reject({ error: 'something went wrong' })
                    return
                })
                employeeList.open("GET", "https://swabhav-tech.firebaseapp.com/emp.txt")
                employeeList.send();

            })

        }
        return data
    }();


    var empNamebtn = document.querySelector("#btn2");
    empNamebtn.addEventListener('click', renderHierarchy);

    function renderHierarchy() {

        service.getDataFromUrl().then(function(data) { createHierarchy(data) })
            .catch(function(error) { console.log(error) })
    }

    function createHierarchy(data) {
        var employeeList = renderDataToArray(data);
        var hierarchicalEmployeeDict = renderDataTohierarchical(employeeList);
        console.log(hierarchicalEmployeeDict)

        var root;
        for (var i = 0; i < employeeList.length; i++) {
            if (employeeList[i][3] == "NULL") {
                root = employeeList[i][1]
            }
        }
        const hierarchy = document.getElementById(0);

        var child = hierarchy.lastElementChild;
        while (child) {
            hierarchy.removeChild(child);
            child = hierarchy.lastElementChild;
        }
        displayEmployeeHierarchy(root, hierarchicalEmployeeDict, 0)

    }

    function displayEmployeeHierarchy(emp, Dict, id) {

        const ul = document.getElementById(id);
        var childNodes = ul.childElementCount;

        var nxtId = childNodes + 10 * id + 1;

        var li = document.createElement("li");
        var name = document.createTextNode(emp);
        var childul = document.createElement("ul");
        childul.id = nxtId;

        li.appendChild(name);
        li.appendChild(childul)
        ul.appendChild(li);


        for (var i = 0; i < Dict[emp].length; i++) {
            // console.log(Dict[emp][i])
            displayEmployeeHierarchy(Dict[emp][i], Dict, nxtId)
        }

    }



    function renderDataTohierarchical(employeeList) {

        var listwithUnderEmployess = {}

        for (var i = 0; i < employeeList.length; i++) {
            listwithUnderEmployess[employeeList[i][1]] = []
        }
        for (var i = 0; i < employeeList.length; i++) {
            if (!isNaN(employeeList[i][3]))
                listwithUnderEmployess[getNameFromId(employeeList[i][3], employeeList)].push(employeeList[i][1])

        }

        return listwithUnderEmployess;
    }

    function getNameFromId(id, employeeList) {

        for (var i = 0; i < employeeList.length; i++) {

            if (employeeList[i][0] == id) {
                return employeeList[i][1]
            }
        }
    }


    var empNamebtn = document.querySelector("#btn1");
    empNamebtn.addEventListener('click', renderTable);


    function renderTable() {
        service.getDataFromUrl().then(function(data) { getDetails(data) })
            .catch(function(error) { console.log(error) })
    }

    function getDetails(data) {
        var employeeList = renderDataToArray(data);
        createheaderForTable();
        for (var i = 0; i < employeeList.length; i++) {
            createRow(employeeList[i][1], employeeList[i][2], employeeList[i][5])
        }
        console.log(employeeList)

    }

    function createRow(Ename, Edesignation, Esalary) {
        const table = document.querySelector('#table');

        var tr = document.createElement("tr");


        var name = document.createElement("td");
        var txt = document.createTextNode(Ename);
        name.appendChild(txt);

        var designation = document.createElement("td");
        var txt = document.createTextNode(Edesignation);
        designation.appendChild(txt);

        var salary = document.createElement("td");
        var txt = document.createTextNode(Esalary);
        salary.appendChild(txt);


        tr.appendChild(name)
        tr.appendChild(designation)
        tr.appendChild(salary)

        table.appendChild(tr)

    }

    function createheaderForTable() {

        const table = document.querySelector('#table');

        var child = table.lastElementChild;
        while (child) {
            table.removeChild(child);
            child = table.lastElementChild;
        }

        var tr = document.createElement("tr");

        var name = document.createElement("th");
        var txt = document.createTextNode("Name");
        name.appendChild(txt);

        var designation = document.createElement("th");
        var txt = document.createTextNode("Designation");
        designation.appendChild(txt);

        var salary = document.createElement("th");
        var txt = document.createTextNode("Salary");
        salary.appendChild(txt);


        tr.appendChild(name)
        tr.appendChild(designation)
        tr.appendChild(salary)

        table.appendChild(tr)
    }

    function renderDataToArray(data) {

        var employeeList = [];
        var cleanedData = []
        let employees = data.split("\r" + "\n");

        for (var i = 0; i < employees.length; i++) {
            if (!cleanedData.includes(employees[i])) {
                cleanedData.push(employees[i])
            }
        }

        for (var i = 0; i < cleanedData.length; i++) {
            employeeList.push(cleanedData[i].split(","))
        }
        return employeeList
    }

})();