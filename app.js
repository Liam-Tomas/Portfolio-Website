
// NavBar Hide on Scroll

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}

const button = document.querySelector('.moreBtn');
const projects = document.querySelectorAll('.projectList')
const projectCategory = document.querySelector('.projectCategory')

projectCategory.addEventListener('click', function (e) {
  e.preventDefault();
  for (let project of projects) {
    project.classList.toggle('fade')
  }
});


// Nav Menu Open and Close

const navMenu = document.querySelector('#nav-menu')
const navSlideBtn = document.querySelector('.openSlideMenu');
const navClose = document.querySelector('.close')
const menuItem = document.querySelector('.menu-items')
const contactMenu = document.querySelectorAll('#contactMenu')


navSlideBtn.addEventListener('click', function () {
  menuItem.style.width = '250px';
  navMenu.style.marginLeft = '250px';
  navSlideBtn.style.opacity = '0'
});


navClose.addEventListener('click', function () {
  menuItem.style.width = '0px';
  navMenu.style.marginLeft = '0px';
  navSlideBtn.style.opacity = '1'
});

for (let contactStuff of contactMenu) {
   contactStuff.addEventListener('click', function () {
     menuItem.style.width = '0px';
     navMenu.style.marginLeft = '0px';
     navSlideBtn.style.opacity = '1'
   })
 }