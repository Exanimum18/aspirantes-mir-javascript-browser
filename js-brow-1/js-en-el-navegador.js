const input = document.querySelector('#texto');
// const input = document.getElementById('texto')
const resultado = document.querySelector('#resultado');
const resultadoMayuscula = document.querySelector('#resultadoMayusculas');
const boton = document.querySelector('.btn')

input.addEventListener('input', function() {
    const texto = input.value.toUpperCase();
    // Código para convertir el texto a mayúsculas y mostrarlo en el párrafo
    // resultado.textContent = texto;
    resultado.innerHTML = texto;
});

boton.addEventListener("click", function() {
    const texto = input.value.toUpperCase();
    resultadoMayuscula.textContent = texto;
});