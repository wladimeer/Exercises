var button = document.getElementById("button");

loadOptions();

function loadOptions() {
    var select = document.getElementById("cities");
    var cities = [
        {name: "Selecciona", value: "" },
        {name: "Curico", value: "Curico" },
        {name: "Talca", value: "Talca"},
        {name: "Linares", value: "Linares"}
    ];

    cities.forEach((item) => {
        var option = document.createElement("option");

        option.setAttribute("label", item.name);
        option.setAttribute("value", item.value);
        select.appendChild(option);  
    });
};

button.addEventListener("click", function(params) {
    var name = document.getElementById("name").value;
    var city = document.getElementById("cities").value;
    var single = document.getElementById("single").checked;
    var married = document.getElementById("married").checked;
    var result = document.getElementById("result");
    var state = "";
    var error = "";
    
    validateFinal();

    function validateState() {
        if(single == true) {
            state = "Soltero";
        }
        
        if(married == true) {
            state = "Casado";
        }
    }

    function validateAll(params) {
        validateState();

        if(name == "" && city == "" && state == "") {
            error = "Verifica los Campos";
        } else {
            if(name == "") {
                error = "Verifica el Nombre" + "<br>";
            }

            if(city == "") {
                error += "Selecciona una Ciudad" + "<br>";
            }

            if(state == "") {
                error += "Selecciona un Estado";
            }
        }

        params.preventDefault();
    }
    
    function validateFinal() {
        validateAll(params);
        result.style.transition = "all 2s";
        
        if(error == "") {
            result.innerHTML = (
                "Nombre " + name + "<br>" +
                "Ciudad " + city + "<br>" +
                "Estado Civil " + state
            );
            result.style.background = "#66BB6A";
        } else {
            result.innerHTML = error;
            result.style.background = "#E53935";
        }
    };

});


    