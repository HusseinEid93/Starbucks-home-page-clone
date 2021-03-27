// Get the elements .heading-icon-wrapper in the #accordion section
const headingIconWrappers = document.querySelectorAll('.categories #accordion .heading-icon-wrapper');

headingIconWrappers.forEach(element => {
   element.addEventListener('click', () => {
      element.querySelector('.icon i').classList.toggle('rotate');
   });
});