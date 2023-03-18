const input = document.querySelector("#texto");
const boton = document.querySelector(".boton");
const resultado = document.querySelector("#resultado");

function esPalindromo(palabra) {
  const palabraReversa = palabra.split("").reverse().join("");
  return palabra === palabraReversa;
}

boton.addEventListener("click", () => {
  const texto = input.value;
  if (esPalindromo(texto)) {
    resultado.textContent = `${texto} es un palíndromo`;
  } else {
    resultado.textContent = `${texto} no es un palíndromo`;
  }
});

