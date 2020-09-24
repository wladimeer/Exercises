var button = document.getElementById("button");

loadDiscount();

function loadDiscount() {
    var discount = document.getElementById("discount");
    var discounts = [
        {name: "Seleccionar", value: ""},
        {name: "0%", value: "0"},
        {name: "10%", value: "10"},
        {name: "30%", value: "30"},
        {name: "50%", value: "50"}
    ];

    discounts.forEach((item => {
        var option = document.createElement("option");

        option.setAttribute("label", item.name);
        option.setAttribute("value", item.value);
        discount.appendChild(option);
    }));
};

button.addEventListener("click", function(params) {
    var price = document.getElementById("price").value;
    var discount = document.getElementById("discount").value;
    var result = document.getElementById("result");
    var error = "";

    if((price == "" || price < 1) && discount == "") {
        error = "Verifica los Campos";
    } else {
        if(price == "" || price < 1) {
            error = "Verifica el Precio";
        }

        if(discount == "") {
            error = "Selecciona el Descuento";
        }
    }

    if(error == "") {
        var amount = ((price * discount) / 100);
        var total = (price - amount);
        result.innerHTML = (
            "Descuento: $" + amount + "<br>" +
            "Total a Pagar: $" + total
        );
        result.style.background = "#154360";
    } else {
        result.innerHTML = error;
        result.style.background = "#922B21";
    }
});
