// Get all elements first 
const openCloseBtn = document.querySelector('.open-close-btn');
const primaryHamburgerMenu = document.querySelector('nav main');
const showSecondaryHamburgerMenuBtn = primaryHamburgerMenu.querySelector('i.fa-chevron-right');
const secondaryHamburgerMenu = document.querySelector('.secondary-hamburger-menu');
const hideSecondaryHamburgerMenu = secondaryHamburgerMenu.querySelector('i');
const overlay = document.getElementById('overlay');


openCloseBtn.addEventListener('click', function () {
   this.querySelector('.wrapper').classList.toggle('open');
   primaryHamburgerMenu.classList.toggle('burger-active');
   secondaryHamburgerMenu.classList.remove('burger-active');
   overlay.classList.toggle('active');
   document.body.classList.toggle('hidden-overflow');
});


showSecondaryHamburgerMenuBtn.addEventListener('click', () => {
   secondaryHamburgerMenu.classList.add('burger-active');
});


hideSecondaryHamburgerMenu.addEventListener('click', () => {
   secondaryHamburgerMenu.classList.remove('burger-active');
});


overlay.addEventListener('click', () => {
   openCloseBtn.click();
});








