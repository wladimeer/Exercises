var button = document.getElementById("button");
var data = [
    {rut:'1-1',nombre:'Juan', cargo:'Desarrollador', mail:'jj@gmail.com'},
    {rut:'1-2',nombre:'Pedro', cargo:'Analista', mail:'pp@gmail.com'},
    {rut:'1-3',nombre:'Maria', cargo:'Testing', mail:'mm@gmail.com'},
    {rut:'1-4',nombre:'Hector', cargo:'Diseñador', mail:'hh@gmail.com'},
    {rut:'1-5',nombre:'Pato', cargo:'Desarrollador', mail:'pa@gmail.com'},
    {rut:'1-6',nombre:'Seba', cargo:'Analista', mail:'ss@gmail.com'},
    {rut:'1-7',nombre:'Diego', cargo:'Diseñador', mail:'dd@gmail.com'},
    {rut:'1-8',nombre:'Pablo', cargo:'Arquitecto', mail:'pb@gmail.com'},
    {rut:'1-9',nombre:'Sergio', cargo:'Testing', mail:'se@gmail.com'},
    {rut:'2-1',nombre:'Paula', cargo:'Desarrollador', mail:'pl@gmail.com'},
    {rut:'2-2',nombre:'Andrea', cargo:'Arquitecto', mail:'an@gmail.com'},
    {rut:'2-3',nombre:'Marco', cargo:'Desarrollador', mail:'ma@gmail.com'},
    {rut:'2-4',nombre:'Pipe', cargo:'Desarrollador', mail:'pi@gmail.com'},
    {rut:'2-5',nombre:'Tom', cargo:'Desarrollador', mail:'to@gmail.com'}
];

function searchPerson() {
    var rut = document.getElementById("txt_rut");
    var result = document.getElementById("result");
    var message = "";
    
    if(rut.value == "") {
        result.innerHTML = "Verifica el Rut Ingresado";
        result.style.color = "red";
    } else {
        var exist = data.some(item => item.rut == rut.value);
        
        if(exist) {
            var person = data.filter(item => item.rut == rut.value);

            message = (
                "Rut: " + person[0].rut + "<br>" + 
                "Nombre: " + person[0].nombre + "<br>" + 
                "Cargo: " + person[0].cargo + "<br>" + 
                "Correo: " + person[0].mail
            );

            rut.value = "";
            result.style.color = "green";
            result.innerHTML = message;
        } else {
            message = "Trabajador No Encontrado";

            result.style.color = "red";
            result.innerHTML = message;
        }   
    }
};

button.addEventListener("click", function() {
    searchPerson();
});