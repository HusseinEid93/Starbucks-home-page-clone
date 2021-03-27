// Get all the icons in the #accordion section
const icons = document.querySelectorAll('.categories #accordion .icon');


icons.forEach(icon => {
   icon.addEventListener('click', () => {
      icon.lastElementChild.classList.toggle('rotate');
   });
})