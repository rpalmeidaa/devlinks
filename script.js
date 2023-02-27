function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light"); // O código abaixo simplifica todo o código acima

  // pegar a tag img
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    // se tiver light mode, adiciona a imagem light
    img.setAttribute('src', './assets/Avatar-light.png')
  } else {
    // se não tiver light mode, adiciona a imagem dark
    img.setAttribute('src', './assets/Avatar-dark.png')
  }
}
