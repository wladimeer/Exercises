loadOptions();

function loadOptions() {
    var select = document.getElementById("jobs");
    var jobs = [
        {name: "Analista", value: "Analista"},
        {name: "Arquitecto", value: "Arquitecto"},
        {name: "Desarrollador", value: "Desarrollador"},
        {name: "Diseñador", value: "Diseñador"},
        {name: "Testing", value: "Testing"}
    ];

    jobs.forEach(item => {
        var option = document.createElement("option");

        option.setAttribute("label", item.name);
        option.setAttribute("value", item.value);
        select.appendChild(option);
    });
};

var button = document.getElementById("bt_search");
var data = [
    {rut:'1-1', nombre:'Juan', cargo:'Desarrollador', mail:'jj@gmail.com'},
    {rut:'1-2', nombre:'Pedro', cargo:'Analista', mail:'pp@gmail.com'},
    {rut:'1-3', nombre:'Maria', cargo:'Testing', mail:'mm@gmail.com'},
    {rut:'1-4', nombre:'Hector', cargo:'Diseñador', mail:'hh@gmail.com'},
    {rut:'1-5', nombre:'Pato', cargo:'Desarrollador', mail:'pa@gmail.com'},
    {rut:'1-6', nombre:'Seba', cargo:'Analista', mail:'ss@gmail.com'},
    {rut:'1-7', nombre:'Diego', cargo:'Diseñador', mail:'dd@gmail.com'},
    {rut:'1-8', nombre:'Pablo', cargo:'Arquitecto', mail:'pb@gmail.com'},
    {rut:'1-9', nombre:'Sergio', cargo:'Testing', mail:'se@gmail.com'},
    {rut:'2-1', nombre:'Paula', cargo:'Desarrollador', mail:'pl@gmail.com'},
    {rut:'2-2', nombre:'Andrea', cargo:'Arquitecto', mail:'an@gmail.com'},
    {rut:'2-3', nombre:'Marco', cargo:'Desarrollador', mail:'ma@gmail.com'},
    {rut:'2-4', nombre:'Pipe', cargo:'Desarrollador', mail:'pi@gmail.com'},
    {rut:'2-5', nombre:'Tom', cargo:'Desarrollador', mail:'to@gmail.com'}
];

button.addEventListener("click", function() {
    var job = document.getElementById("jobs");
    var filter = data.filter(item => item.cargo == job.value);
    var body = document.getElementById("body");
    body.innerHTML = "";
    
    filter.forEach(item => {
        var rut = document.createElement("td");
        var name = document.createElement("td");
        var job = document.createElement("td");
        var email = document.createElement("td");
        var tr = document.createElement("tr");

        rut.innerHTML = item.rut;
        name.innerHTML = item.nombre;
        job.innerHTML = item.cargo;
        email.innerHTML = item.mail;
        
        tr.appendChild(rut);
        tr.appendChild(name);
        tr.appendChild(job);
        tr.appendChild(email);

        body.appendChild(tr);
    });
});