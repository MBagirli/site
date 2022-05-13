let allSections = document.querySelectorAll('section');
let arrayofSections = [];
allSections.forEach(function (element) {
  window.addEventListener('scroll', function () {
    element.classList.add('animationforall');
  });
});