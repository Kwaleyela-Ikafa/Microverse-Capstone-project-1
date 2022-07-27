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

const foundersData = [
  {
    id: 1,
    picture: './images/kmi.jpg',
    altText: 'a picture of Kwaleyela',
    founderName: 'Kwaleyela M. Ikafa',
    job: 'IT support specialist',
    information: 'He is an It support specialist currently learning fullstack web developement at microverse',
  },
  {
    id: 2,
    picture: './images/lk.jpg',
    altText: 'a picture of Likando',
    founderName: 'Likando Kamuya',
    job: 'IT support specialist',
    information: 'He is an It support specialist working part time for WesTTech',
  },
];

const foundersContainer = document.createElement('section');
foundersContainer.setAttribute('class', 'founders');

foundersData.forEach((founder) => {
  const founderSection = document.createElement('div');
  founderSection.setAttribute('class', 'founders-section');
  founderSection.setAttribute('id', 'each-funder');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'founder-image');
  const image = document.createElement('img');
  image.setAttribute('class', 'founder-image');
  image.setAttribute('src', founder.picture);
  image.setAttribute('alt', founder.altText);

  imageSection.appendChild(image);
  founderSection.appendChild(imageSection);

  const content = document.createElement('div');
  content.setAttribute('class', 'founder-details');
  content.setAttribute('id', 'about-speaker');

  const founderName = document.createElement('h2');
  founderName.setAttribute('class', 'founder-name');
  founderName.textContent = founder.founderName;
  content.appendChild(founderName);

  const founderJob = document.createElement('p');
  founderJob.setAttribute('class', 'founder-job');
  founderJob.textContent = founder.job;
  content.appendChild(founderJob);

  const dots = document.createElement('p');
  dots.setAttribute('id', 'dots');
  dots.textContent = '.........';
  content.appendChild(dots);

  const founderInformation = document.createElement('p');
  founderInformation.setAttribute('class', 'founder-history');
  founderInformation.textContent = founder.information;
  content.appendChild(founderInformation);

  founderSection.appendChild(content);
  foundersContainer.appendChild(founderSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(foundersContainer, partners);