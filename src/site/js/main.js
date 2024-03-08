const buttons = document.querySelectorAll('.scroll-btn');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    window.scrollTo(0, window.scrollY + 100);
  });
}