(function() {

    var questionList = []
    var ques = {}
    var questionNo = 0;
    var marks = 0;
    var totalMarks = 10;
    var answer;
    var next = -1;

    document.body.style.backgroundColor = "pink";
    document.getElementById('reload').style.visibility = "hidden";

    let btn1 = document.getElementById('start');
    btn1.addEventListener("click", function() {
        storeData();
        showData(next);
    })

    let btn2 = document.getElementById('next');
    btn2.addEventListener("click", function() {
        if (document.getElementById('value1').checked)
            currentAnswer = document.getElementById('label1').innerHTML;
        if (document.getElementById('value2').checked)
            currentAnswer = document.getElementById('label2').innerHTML;
        if (document.getElementById('value3').checked)
            currentAnswer = document.getElementById('label3').innerHTML;
        if (document.getElementById('value4').checked)
            currentAnswer = document.getElementById('label4').innerHTML;
        if (currentAnswer == answer)
            marks += 2;
        console.log(marks);
        console.log("next 1 : " + next)
        if (next < 6)
            showData();
    })

    let btn3 = document.getElementById('reload');
    btn3.addEventListener("click", function() {
        window.location.reload();
    })

    function storeData() {
        addToList("Which of the following is used to find bugs in Java program ?", "JVM", "JRE", "JDK", "JDB", "JDB");
        addToList("What is the return type of the hashCode() method in the Object class?", "Object", "int", "long", "void", "int");
        addToList("Which keyword is used for accessing the features of a package?", "package", "import", "extends", "export", "import");
        addToList("Which of the following is a mutable class in java?", "String", "Byte", "Short", "StringBuilder", "StringBuilder");
        addToList("What is meant by the classes and objects that dependents on each other?", "Tight coupling", "Loose coupling", "Cohesion", "None", "Tight coupling");
    }

    function addToList(question, option1, option2, option3, option4, answer) {
        questionNo++;
        ques = {
            id: questionNo,
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: answer,
        };
        questionList.push(ques);
        console.log(questionList);
        storetoAdmin()
    }

    function storetoAdmin() {
        localStorage.setItem("questionList", JSON.stringify(questionList))
    }

    function getFromAdmin() {
        return localStorage.getItem("questionList");
    }

    function showData() {
        next++
        if (next == 5) {
            document.getElementById('result').innerHTML = "You scored " + marks * totalMarks + " %";
            document.getElementById('reload').style.visibility = "visible";
            return;
        }
        console.log("next 2 : " + next)
        document.getElementById("question").innerHTML = questionList[next].question; //Change
        document.getElementById("label1").innerHTML = questionList[next].option1;
        document.getElementById("label2").innerHTML = questionList[next].option2;
        document.getElementById("label3").innerHTML = questionList[next].option3;
        document.getElementById("label4").innerHTML = questionList[next].option4;
        answer = questionList[next].answer;

    }

})();