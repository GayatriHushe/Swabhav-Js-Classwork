let task = {}
var myList = []

let input = document.querySelector('input');
input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        let info = input.value;
        if (info)
            addToList(info);
        input.value = "";
        input.focus();
    }


})

function renderElements(task) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(task.info));
    document.getElementById("taskList").append(li);
}

function addToList(info) {
    task = {
        id: Date.now(),
        info: info,
        createdTime: moment().endOf('day').fromNow(),
        isDeleted: false,
    };
    myList.push(task);
    renderElements(task);
    console.log(myList);
}