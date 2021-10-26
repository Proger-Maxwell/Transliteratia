
var arrows = document.querySelectorAll('.block__icon');

arrows.forEach((arrow) => {
    arrow.addEventListener('click', event => {
        arrow.classList.toggle('rotate');
        arrow.parentElement.classList.toggle('close');
        arrow.parentElement.nextElementSibling.classList.toggle('hidden');
      });
});