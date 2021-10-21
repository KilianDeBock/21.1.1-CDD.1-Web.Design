window.onscroll = function () {
  myFunction();
};

const main = document.getElementById('main');
const headerText = document.getElementById('header--text');
const sticky = main.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headerText.classList.remove('header--text-hide');
  } else {
    headerText.classList.add('header--text-hide');
  }
}