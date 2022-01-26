const navMenu = document.querySelector('.nav-menu')
const navSlideBtn = document.querySelector('.nav-slider-btn');
const navClose = document.querySelector('.close')
const menuItem = document.querySelector('i')


navSlideBtn.addEventListener('click', function () {
    menuItem.style.width = '250px';
    navMenu.style.marginLeft = '250px';
});


navClose.addEventListener('click', function () {
    menuItem.style.width = '0px';
    navMenu.style.marginLeft = '0px';
});


const chicken = 2 + 2;
