const footer = document.getElementById('footer');


document.body.addEventListener('mouseenter', () => {
  // Muestra el footer cuando el mouse entra en el área del cuerpo
  footer.style.bottom = '0';
});

document.body.addEventListener('mouseleave', () => {
  // Oculta el footer cuando el mouse sale del área del cuerpo
  footer.style.bottom = '-100px';
});