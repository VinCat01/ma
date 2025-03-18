const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuItems = document.querySelector('.menu-items');

hamburgerIcon.addEventListener('click', function () {
    menuItems.classList.toggle('active');
});
