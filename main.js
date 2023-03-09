const burgerCheckbox = document.getElementById('burger-checkbox');
const burgerLinks = document.querySelector('.burger-links');

function closeBurgerMenu() {
  burgerCheckbox.checked = false;
  burgerLinks.classList.add('closed');
}

burgerCheckbox.addEventListener('change', () => {
  if (burgerCheckbox.checked) {
    burgerLinks.classList.remove('closed');
  } else {
    closeBurgerMenu();
  }
});

// Ajouter une fonction pour fermer le menu de burger en cliquant sur un lien
const burgerLinksArray = Array.from(document.querySelectorAll('.burger-links a'));
burgerLinksArray.forEach(link => {
  link.addEventListener('click', () => {
    closeBurgerMenu();
  });
});