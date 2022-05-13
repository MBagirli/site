let MyArray = [{
    url: 'url("img/c1.png")',
    D: "Data Analysis with Python"
  },
  {
    url: 'url("img/c2.png")',
    D: "Data Visualization with Python"
  },
  {
    url: 'url("img/c3.png")',
    D: "Algorithmic Programming Contest "
  },
  {
    url: 'url("img/c4.png")',
    D: "Calculus 1"
  },
  {
    url: 'url("img/c5.png")',
    D: "Computer Programming (Programming Logic)"
  },
  {
    url: 'url("img/c6.png")',
    D: "Data Manipulation in Python: Master Python, Numpy & Pandas"
  },
  {
    url: 'url("img/c7.png")',
    D: "Introduction to Database and SQL"
  },
  {
    url: 'url("img/c8.png")',
    D: "Python for Data Science"
  },
  {
    url: 'url("img/c9.png")',
    D: "Python for Machine Learning"
  },
  {
    url: 'url("img/c10.png")',
    D: "Beginner C# Programming"
  },
  {
    url: 'url("img/c11.png")',
    D: "Python | Zero to Advanced Programming Lessons | 2022"
  }
];
let index = 0;
let RB = document.getElementById('btn--right');
let LB = document.getElementById('btn--left');
let img = document.querySelector('.Section-Certificates__Container__Slider__Image');
let d = document.querySelector('.Section-Certificates__Container__Slider__D');
let auto;

Auto();

RB.addEventListener('click', function () {
  index++;
  Check();
  Change();
});
LB.addEventListener('click', function () {
  index--;
  Check();
  Change();
});
document.querySelectorAll('.Section-Certificates__Container__Slider__Button').forEach(function (element) {
  element.addEventListener('mouseover', function () {
    clearInterval(auto);
  });
  element.addEventListener('mouseleave', function () {
    Auto();
  });
});

function Check() {
  if (index >= MyArray.length) {
    index = 0;
  }
  if (index == -1) {
    index = MyArray.length - 1;
  }
}

function Change() {
  img.style.backgroundImage = MyArray[index].url;
  d.textContent = MyArray[index].D;
}

function Auto() {
  auto = setInterval(function () {
    index++;
    Check();
    Change();
  }, 2000);
}