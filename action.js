//el siguiente codigo sirve para que al pasar el raton por encima de la flecha cambie a otra imagen que es la misma pero con otro color
window.addEventListener('load', iniciar, false);
function iniciar() {
    var image = document.getElementById('flecha');
    flecha.addEventListener('mouseover', foto2, false);
    flecha.addEventListener('mouseout', restaurar, false);
}
function restaurar() {
    var flecha= document.getElementById('flecha').src = "img/abajo-1.png";
}
function foto2() {
    var flecha = document.getElementById('flecha').src = "img/abajo-2.png";
}
//el siguiente codigo es para conseguir que el menu se quede pegado a la parte superior de arriba la hacer scroll hacia abajo
/*$(documenet).ready(function () {
    var altura = $('.normal').offset().top;
    alert(altura);

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura ){
            $('.normal').addclass('menu');
        }   else {
                $('.menu').removeClass('menu');
        }
    });
});*/
var menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > altura){
        menu.classList.add('menu')
    }else{
        menu.classList.remove('menu')
    }
});
//boton de scroll automatico
document.getElementById('flecha').onclick =function scroll(menu) {
    var ele = document.getElementById('menu');
    window.scrollTo(ele.offsetLeft, ele.offsetTop);
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
}
function cambiar() {
    document.getElementById('india').classList.toggle("fondo");
}
document.getElementById('india').onclick =function () {
    cambiar();
}
function cambiar2() {
    document.getElementById('mexico').classList.toggle("fondo");
}
document.getElementById('mexico').onclick =function () {
    cambiar2();
}
function cambiar3() {
    document.getElementById('nuevazelanda').classList.toggle("fondo");
}
document.getElementById('nuevazelanda').onclick =function () {
    cambiar3();
}
function cambiar4() {
    document.getElementById('peru').classList.toggle("fondo");
}
document.getElementById('peru').onclick =function () {
    cambiar4();
}
function cambiar5() {
    document.getElementById('islandia').classList.toggle("fondo");
}
document.getElementById('islandia').onclick =function () {
    cambiar5();
}
function cambiar6() {
    document.getElementById('japon').classList.toggle("fondo");
}
document.getElementById('japon').onclick =function () {
    cambiar6();
}