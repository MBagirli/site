let menu = document.querySelector('#Menu');
let menu2 = document.querySelector('#Menu2');
let Nav = document.querySelector('.Navigation');
let firstline = document.getElementById('first__line');
let secondline = document.getElementById('second__line');
let thirdline = document.getElementById('third__line');
menu.addEventListener('click', function () {
  menu2.classList.toggle('Open');
  Nav.classList.toggle('Navigation__display');
  firstline.classList.toggle('forfirst');
  secondline.classList.toggle('forsecond');
  thirdline.classList.toggle('forthird');
});