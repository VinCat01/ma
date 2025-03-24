const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuItems = document.querySelector('.menu-items');

function closeMenu() {
    hamburgerIcon.classList.remove('open');
    menuItems.classList.remove('open');
  }

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('open');
  menuItems.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuItems.contains(event.target);
    const isClickInsideHamburger = hamburgerIcon.contains(event.target);
  
    if (!isClickInsideMenu && !isClickInsideHamburger && menuItems.classList.contains('open')) {
      closeMenu();
    }
  });
