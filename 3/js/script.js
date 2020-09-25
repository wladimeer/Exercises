loadNews();

function loadNews(){
    var ul = document.getElementById("ul");
    var news = [
        {title: "Noticia 1", content: "Contenido 1"},
        {title: "Noticia 2", content: "Contenido 2"},
        {title: "Noticia 3", content: "Contenido 3"}
    ];
    
    news.forEach(item => {
        var title = document.createElement("div");
        var content = document.createElement("div");
        var li = document.createElement("li");
        
        title.innerHTML = "<span class='material-icons'>assignment</span>" + item.title;
        content.innerHTML = item.content;

        title.className = "collapsible-header title";
        content.className = "collapsible-body content";
        
        li.appendChild(title);
        li.appendChild(content);
        ul.appendChild(li);
    });
};

$(document).ready(function() {
    $('.collapsible').collapsible();
});