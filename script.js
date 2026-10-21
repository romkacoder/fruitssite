const tabs = document.querySelectorAll('.tab');
const links = document.querySelectorAll('nav button');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamb');

function openTab(id) {
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.id === id);
  });

  links.forEach(link => {
    link.classList.toggle('active', link.dataset.tab === id);
  });

  nav.classList.remove('open');

  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

links.forEach(link => {
  link.addEventListener('click', () => openTab(link.dataset.tab));
});

document.querySelectorAll('[data-go]').forEach(button => {
  button.addEventListener('click', () => openTab(button.dataset.go));
});

document.querySelector('.brand').addEventListener('click', event => {
  event.preventDefault();
  openTab('home');
});

if (hamburger) {
  hamburger.setAttribute('aria-label', 'Открыть меню');
  hamburger.setAttribute('aria-expanded', 'false');

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    nav.classList.remove('open');
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});
