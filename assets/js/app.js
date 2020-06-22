// MENU 

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-menu');
const nav = document.querySelector('.nav-principal');
const body = document.body;

menuIcon.addEventListener('click', (e) => {
  e.preventDefault()
  body.classList.add('menu-toggle');
})

closeIcon.addEventListener('click', (e) => {
  e.preventDefault()
  body.classList.remove('menu-toggle');
})