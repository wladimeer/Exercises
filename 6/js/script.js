var button = document.getElementById("button");
var body = document.getElementById("body");
var array = [];

function review() {
    var firstOptions = document.getElementsByName("first");
    var secondOptions = document.getElementsByName("second");
    var thirdOptions = document.getElementsByName("third");
    var firstSituation = "Incorrecta";
    var secondSituation = "Incorrecta";
    var thirdSituation = "Incorrecta";
    var checked = false;
    var position = 0;
    var error = ""
    var size = 0;

    firstOptions.forEach(item => {
        size = firstOptions.length;
        position++;

        if(item.checked) {
            checked = true;

            if(item.id == "13") {
                firstSituation = "Correcta";
            }
        } else if(size == position) {
            if(checked == false) {
                error = "Selecciona una respuesta en la pregunta 1" + "<br>"; 
            }
        }
    });

    checked = false;
    position = 0;

    secondOptions.forEach(item => {
        size = secondOptions.length;
        position++;

        if(item.checked) {
            checked = true;
            if(item.id == "22") {
                secondSituation = "Correcta";
            }
        } else if(size == position) {
            if(checked == false) {
                error += "Selecciona una respuesta en la pregunta 2" + "<br>";
            }
        }
    });

    checked = false;
    position = 0;

    thirdOptions.forEach(item => {
        size = thirdOptions.length;
        position++;

        if(item.checked) {
            checked = true;

            if(item.id == "31") {
                thirdSituation = "Correcta";
            }
        } else if(size == position) {
            if(checked == false) {
                error += "Selecciona una respuesta en la pregunta 3" + "<br>";
            }
        }
    });

    body.innerHTML = "";

    if(error == "") {
        array.splice(0, array.length);

        array.push({
            number: array.length + 1, situation: firstSituation, answers: "Linus Torvalds"
        });
    
        array.push({
            number: array.length + 1, situation: secondSituation, answers: "Cristobal Colon"
        });
    
        array.push({
            number: array.length + 1, situation: thirdSituation, answers: "2"
        });
    } else {
        var td = document.createElement("td");
        var tr = document.createElement("tr");

        td.innerHTML = error;
        td.style.color = "red";
        td.style.textAlign = "center";
        td.setAttribute("colspan", 3);

        tr.appendChild(td);
        body.appendChild(tr);
    }
};

function loadAnswers() {
    review();
    
    for(var i = 0; i < array.length; i++) {
        var one = document.createElement("td");
        var two = document.createElement("td");
        var three = document.createElement("td");
        var tr = document.createElement("tr");

        one.innerHTML = array[i].number;
        two.innerHTML = array[i].situation;
        three.innerHTML = array[i].answers;

        tr.appendChild(one);
        tr.appendChild(two);
        tr.appendChild(three);
        body.appendChild(tr);
    }
};

button.addEventListener("click", function() {
    loadAnswers();
});