hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function() {
    navBar = document.querySelector(".nav-list");
    navBar.classList.toggle("active");
}

function closeMenu() {
    var menu =
    document.getElementById('menu');

    menu.classList.remove('active');
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 6000);