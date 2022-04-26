let menu = document.querySelector('#Menu');
let menu2 = document.querySelector('#Menu2');
let Nav = document.querySelector('.Navigation');
menu.addEventListener('click', function () {
  menu2.classList.toggle('Open');
  Nav.classList.toggle('Navigation__display');
});