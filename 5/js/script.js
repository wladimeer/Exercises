var button = document.getElementById("button");
var body = document.getElementById("body");
var array = [];

function addData() {
    var name = document.getElementById("name");
    var price = document.getElementById("price");
    var unit = document.getElementById("unit");
    var result = document.getElementById("result");
    var rightName = false;
    var rightPrice = false;
    var rightUnit = false;
    var error = "";

    if(name.value != "") {
        rightName = true;
    }

    if(price.value != "" && price.value > 0) {
        rightPrice = true;
    }

    if(unit.value != "" && unit.value > 0) {
        rightUnit = true;
    }

    if(rightName == false && rightPrice == false && rightUnit == false) {
        error = "Verifica los Campos";
    } else {
        if(rightName == false) {
            error = "Verifica el Nombre" + "<br>";
        }
        
        if(rightPrice == false) {
            error += "Verifica el Precio" + "<br>";
        }

        if(rightUnit == false) {
            error += "Verifica la Unidad";
        }
    }

    if(error == "") {
        var product = {
            number: (array.length + 1),
            name: name.value,
            price: "$" + price.value,
            unit: unit.value,
            total: "$" + (price.value * unit.value)
        };
    
        name.value = "";
        price.value = "";
        unit.value = "";
        
        array.push(product);
        loadData();
    } else {
        result.innerHTML = error;
        result.style.background = "red";
    }
};

function loadData() {
    body.innerHTML = "";

    for(var i = 0; i < array.length; i++) {
        var number = document.createElement("td");
        var name = document.createElement("td");
        var price = document.createElement("td");
        var unit = document.createElement("td");
        var total = document.createElement("td");
        var tr = document.createElement("tr");
        
        number.innerHTML = array[i].number;
        name.innerHTML = array[i].name;
        price.innerHTML = array[i].price;
        unit.innerHTML = array[i].unit;
        total.innerHTML = array[i].total;

        tr.appendChild(number);
        tr.appendChild(name);
        tr.appendChild(price);
        tr.appendChild(unit);
        tr.appendChild(total);  

        body.appendChild(tr);
    }
};

button.addEventListener("click", function() {
    addData();
});