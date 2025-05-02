document.addEventListener('DOMContentLoaded', () => {
    const sobre = document.querySelector('.sobre');
    sobre.addEventListener('click', () => {
      sobre.classList.toggle('abierto');
    });
  });
  