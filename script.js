// ========== MENU BURGER ==========
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(id)) {
          link.classList.add('active');
        }
      });
    }
  });

  // Sticky navbar
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Fermer le menu sur scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ========== SCROLL REVEAL ==========
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projets-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ========== TYPED TEXT ==========
const typed = new Typed('.typed-text', {
  strings: [
    'Social Media Manager',
    'Ingénieur en Génie Électrique (en formation)',
    'Amoureux de la Tech et de l'IA. Futur innovateur dans ces domaines',
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

