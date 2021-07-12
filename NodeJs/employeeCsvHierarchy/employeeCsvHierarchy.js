var uniqueEmployees;

document.getElementById('display').addEventListener('click', function() {
    fetch('emp.csv')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            addToList(data)
        })
});

function addToList(data) {
    var employeeList = [];
    var lines = data.split('\n');
    var keys = lines[0].split(',');
    for (var i = 1; i < lines.length; i++) {
        var rowdata = lines[i].split(',');
        employeeList[i] = {};
        for (var j = 0; j < rowdata.length; j++) {
            employeeList[i][keys[j]] = rowdata[j];
        }
    }
    console.log(employeeList)
    removeDuplicateEmployees(employeeList)

}

function removeDuplicateEmployees(employeeObj) {
    var employeeSet = new Set();

    uniqueEmployees = employeeObj.reduce(function(employee, item) {
        if (!employeeSet.has(item.EMPNO)) {
            employeeSet.add(item.EMPNO, item)
            employee.push(item)
        }
        return employee;
    }, []);
    showTable(uniqueEmployees);
}

function showTable(uniqueEmployees) {
    document.getElementById('heading').innerHTML = "Employees are : "
    var table = "<table border=1 >";
    for (var i = 0; i < uniqueEmployees.length; i++) {
        table += "<tr>";
        table += "<td>" + uniqueEmployees[i].EMPNO + "</td>";
        table += "<td>" + uniqueEmployees[i].ENAME + "</td>";
        table += "<td>" + uniqueEmployees[i].JOB + "</td>";
        table += "<td>" + uniqueEmployees[i].MGR_ID + "</td>";
        table += "<td>" + uniqueEmployees[i].DOJ + "</td>";
        table += "<td>" + uniqueEmployees[i].SAL + "</td>";
        table += "<td>" + uniqueEmployees[i].COMM + "</td>";
        //table += "<td>" + uniqueEmployees[i]."DEPTNO" + "<td>";
    }
    table += "</table>";
    document.getElementById("result").innerHTML = table;
    document.getElementById("total").innerHTML = "Total no of employees : " + uniqueEmployees.length;
}


document.getElementById('hierarchy').addEventListener("click", function() {
    var root = [];
    var children = {};
    for (var i = 1; i < uniqueEmployees.length; ++i) {
        var employee = uniqueEmployees[i],
            p = employee.MGR_ID,
            target = (p == 'NULL') ? root : (children[p] || (children[p] = []));

        target.push({ value: employee });
        //console.log("target : " + JSON.stringify(target))
        document.getElementById('hierarchyEmployee').innerHTML = JSON.stringify(target);
    }
    console.log("Hierarchy : ")
        //console.log(root)
    console.log(children)
        //document.getElementById('hierarchyEmployee').style.visibility = "visible";
        //document.getElementById('hierarchyEmployee').innerHTML = JSON.stringify(children);
        // for (let index = 0; index < children.length; index++) {
        //     document.getElementById('hierarchyEmployee').innerHTML = children[index] + "<br>";

})