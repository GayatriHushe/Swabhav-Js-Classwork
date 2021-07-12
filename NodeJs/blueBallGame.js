(function() {

    function hideStartButton() {
        document.getElementById("start").style.display = "none";
        //document.getElementById("rules").style.display = "Blue Ball Game";
    }

    function getRandomNumber(low, high) {
        let r = Math.floor(Math.random() * (high - low + 1)) + low;
        return r;
    }

    var btnArray = []

    function showButtons() {
        for (let index = 1; index <= 50; index++) {

            var btn = document.createElement('button');
            btn.innerHTML = index;
            btn.type = "button";
            btn.id = index;
            btn.style.borderRadius = 50;
            btnArray.push(btn);
            var btns = document.getElementById('btnList');
            btns.appendChild(btn);
        }
    }

    function checkButtons(blueBtn) {

        for (let index = 1; index <= btnArray.length; index++) {
            var trial = 3;
            var currentColor;
            var win = false;
            btnArray[index].addEventListener("click", function() {
                var btnIndexNo = document.getElementById(this.id);
                trial--;
                if (index == (blueBtn - 1)) {
                    console.log("Btn " + (index + 1) + " is blue");
                    btnIndexNo.style.backgroundColor = "blue";
                    document.getElementById('result').innerHTML = "You win";
                    win = true;
                } else if (index < (blueBtn - 1)) {
                    console.log("Btn " + (index + 1) + " is red");
                    btnIndexNo.style.backgroundColor = "red";
                    document.getElementById('result').innerHTML = "Your blue ball is on right side" + " No of trials left :" + trial;
                    currentColor = "red";
                } else {
                    console.log("Btn " + (index + 1) + " is green");
                    btnIndexNo.style.backgroundColor = "green";
                    document.getElementById('result').innerHTML = "Your blue ball is on left side" + " No of trials left :" + trial;
                    currentColor = "green";
                }
                btnIndexNo.style.backgroundColor = currentColor;
                if (trial == 0 & win == false) {
                    //btnIndexNo.style.backgroundColor = currentColor;
                    alert("You lose the game");
                    window.location.reload()
                    return;
                }
                if (win) {
                    //btnIndexNo.style.backgroundColor = currentColor;
                    alert("You win");
                    window.location.reload()
                    return;
                }

                alert("Trials left : " + trial);

            })

        }

    }

    document.getElementById("start").addEventListener("click", function() {
        hideStartButton();
        var blueBtn = getRandomNumber(1, 50);
        alert(blueBtn)
        showButtons();
        checkButtons(blueBtn);
    })

})();