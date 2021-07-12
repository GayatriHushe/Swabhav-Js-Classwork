let task = {}
var myList = []


let input = document.querySelector('input');
input.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        let info = input.value.trim();
        if (info)
            addToList(info);
        input.value = "";
        input.focus();
    }

    function deleteTask() { //new
        var id = this.parentElement.id;
        var li = document.getElementById(id);
        myList[id].isDeleted = true;
        li.remove();
        console.log(myList)
    }

    function renderElements(task) {
        var ul = document.getElementById('taskList');

        var li = document.createElement('li');
        //li.id = task.id;
        li.appendChild(document.createTextNode(task.info));
        ul.append(li);

        var btnDelete = document.createElement("button");
        btnDelete.textContent = "X"
            //var txt = document.createTextNode("X");
        btnDelete.addEventListener("click", function() {
            var id = task.id;
            //var li = document.getElementById(id);
            ul.removeChild(li);
            task.isDeleted = true;
            btnDelete.remove();
            console.log(myList)
        });
        //btnDelete.appendChild(txt);


        li.appendChild(btnDelete)

    }

    function addToList(info) {
        //taskId++;
        task = {
            id: Date.now(),
            info: info,
            createdTime: moment().endOf('day').fromNow(),
            isDeleted: false,
        };
        myList.push(task);
        //localStorage.setItem("myList", JSON.stringify(myList));
        renderElements(task);
        console.log(myList);
    }
})