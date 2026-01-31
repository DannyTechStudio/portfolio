// Hamburger Fucntionality
const hamburger = document.querySelector('.hamburger-icon');
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
   nav.classList.toggle('active');
   hamburger.innerHTML = nav.classList.contains('active') ? '✕' : '&#9776;';
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.innerHTML = '&#9776;';
    });
});