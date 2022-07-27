const hamburger = document.querySelector('.hamburger');
// const HamBurger = document.querySelector('.ham-container');

hamburger.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('myHamburger').classList.toggle('change');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.remove('show');
  document.getElementById('myHamburger').classList.remove('change');
}));
