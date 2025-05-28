const buttons = document.querySelectorAll('.scroll-btn');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    window.scrollTo(0, window.scrollY + 100);
  });
}

document.querySelectorAll('#nav nav h5').forEach(header => {
  header.addEventListener('click', function () {
    const isOpen = this.classList.contains('open');
    document.querySelectorAll('#nav nav h5').forEach(h => h.classList.remove('open'));
    if (!isOpen) {
      this.classList.add('open');
    }
  });
});