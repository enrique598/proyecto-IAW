//el siguiente codigo sirve para que al pasar el raton por encima de la flecha cambie a otra imagen que es la misma pero con otro color
window.addEventListener('load', iniciar, false);
function iniciar() {
    var image = document.getElementById('flecha');
    flecha.addEventListener('mouseover', cambiar, false);
    flecha.addEventListener('mouseout', restaurar, false);
}
function restaurar() {
    var flecha= document.getElementById('flecha').src = "img/abajo-1.png";
}
function cambiar() {
    var flecha = document.getElementById('flecha').src = "img/abajo-2.png";

}
//el siguiente codigo es para conseguir que el menu se quede pegato a la parte superior de arriba la hacer scroll hacia abajo
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
document.getElementById('menu').onclick =function () {

}
