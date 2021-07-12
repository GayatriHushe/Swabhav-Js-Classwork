let quote = {}
var myList = []

var output;
document.body.style.backgroundColor = "pink";

window.onload = function() {
    if (!getFromAdmin())
        return;

    myList = JSON.parse(getFromAdmin())

};

let btn1 = document.getElementById('btnShowResponse');
btn1.addEventListener("click", function(e) {
    if (validation()) {
        var num = document.getElementById("myNumber").value;
        getXhrResponse();
        changeBackgroundColor(num);
    }
})

let btn2 = document.getElementById('btnShowPreviousResponses');
btn2.addEventListener("click", function(e) {
    if (!getFromAdmin())
        return;
    myList = JSON.parse(getFromAdmin())
    for (let index = 0; index < myList.length; index++) {
        if (!myList[index].isDeleted)
            renderElements(myList[index]);
    }
})

let btn3 = document.getElementById('btnHidePreviousResponses');
btn3.addEventListener("click", function(e) {
    document.body.style.backgroundColor = "pink";
    document.getElementById("text").innerHTML = "";
    while (document.getElementById('quoteList').hasChildNodes())
        document.getElementById('quoteList').removeChild(document.querySelector('li'))
})

let btn4 = document.getElementById('btnDeleteResponse');
btn4.addEventListener("click", function(e) {
    document.body.style.backgroundColor = "pink";
    if (validation()) {
        var num = document.getElementById("myNumber").value;
        deleteFromList(num);
    }
})

function deleteFromList(num) {
    myList.forEach(element => {
        if (element.no == num) {
            element.isDeleted = true;
            storetoAdmin();
            console.log(myList)
            return;
        }
        console.log("No such entry exist!")
    });
}

function validation() {
    var inputNumber = document.querySelector("input");
    if (inputNumber.value == "") {
        alert("Insert correct number")
        return false;
    }
    return true;
}

function changeBackgroundColor(num) {
    if (num % 2 == 0) {
        document.body.style.backgroundColor = "orange";
        return;
    }
    document.body.style.backgroundColor = "lightblue";
}
var num;

function getXhrResponse() {
    console.log("start")
    num = document.getElementById("myNumber").value;
    var xhr = new XMLHttpRequest()
    xhr.addEventListener("load", function() {
        console.log(xhr.responseText)
        output = xhr.responseText;
        document.getElementById("text").innerHTML = output;
        addToList(output);
        document.getElementById("text").innerHTML = output + "<br>" + quote.createdTime;
        storetoAdmin(myList);
    })
    xhr.open("GET", "http://numbersapi.com/" + num)
    xhr.send();
    console.log("end")
}

function addToList(output) {
    quote = {
        id: Date.now(),
        no: num,
        info: output,
        createdTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
        isDeleted: false,
    };
    myList.unshift(quote);
    console.log(myList);
}

function storetoAdmin() {
    localStorage.setItem("myList", JSON.stringify(myList))
}

function getFromAdmin() {
    return localStorage.getItem("myList");
}

function renderElements(quote) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(quote.info + " Time : " + quote.createdTime));
    document.getElementById("quoteList").append(li);
}