var button = document.getElementById("button");

function validateValues() {
    var noteOne = document.getElementById("noteOne").value;
    var noteTwo = document.getElementById("noteTwo").value;
    var noteThree = document.getElementById("noteThree").value;
    var result = document.getElementById("result");
    var rightNoteOne = false;
    var rightNoteTwo = false;
    var rightNoteThree = false;
    var error = "";

    if(noteOne != "" && noteOne > 0 && noteOne <= 7 && noteOne.length <= 3) {
        rightNoteOne = true;
    }

    if(noteTwo != "" && noteTwo > 0 && noteTwo <= 7 && noteTwo.length <= 3) {
        rightNoteTwo = true;
    }

    if(noteThree != "" && noteThree > 0 && noteThree <= 7 && noteThree.length <= 3) {
        rightNoteThree = true;
    }

    if(rightNoteOne == false && rightNoteTwo == false && rightNoteThree == false) {
        error = "Verifica los Campos";
    } else {
        if(rightNoteOne == false) {
            error = "Verifica la Nota 1" + "<br>";
        }

        if(rightNoteTwo == false) {
            error += "Verifica la Nota 2" + "<br>";
        }

        if(rightNoteThree == false) {
            error += "Verifica la Nota 3";
        }
    }

    if(error == "") {
        var average = (
            ((parseFloat(noteOne)) + (parseFloat(noteTwo)) + (parseFloat(noteThree))) / 3
        );

        average = average.toFixed(1);

        if(average < 4) {
            result.innerHTML = "Reprobado con " + average;
            result.style.background = "#e93011";
        } else if(average => 4) {
            result.innerHTML = "Aprobado con " + average; 
            result.style.background = "#467835";
        }
    } else {
        result.innerHTML = error;
        result.style.background = "#e93011";
    }
};

button.addEventListener("click", function() {
    validateValues();    
});