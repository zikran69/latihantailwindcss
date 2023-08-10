// navbar fixed
window.onscroll=function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}
// hamberger
const hamberger = document.querySelector ('#hamberger');
const naveMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function(){
    hamberger.classList.toggle('hamberger-active');
    naveMenu.classList.toggle('hidden');
});