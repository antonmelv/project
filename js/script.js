const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger__menu');
const bodyLock = document.getElementById('body');
const burgerClose = document.getElementsByClassName('close__burger');

burger.onclick = function() {
    burger.classList.toggle('burger__active');
    burgerMenu.classList.toggle('burger__menu__active');
    bodyLock.classList.toggle('lock');
};

for (var i = 0; i<burgerClose.length; i++) 
burgerClose[i].onclick = function() {
    burger.classList.toggle('burger__active');
    burgerMenu.classList.toggle('burger__menu__active');
    bodyLock.classList.toggle('lock');
}