// Initialise la galerie au chargement de la page
function initializeGallery() {
  console.log("Gallery initialized");
  addTabIndexToFigures();
}

// Ajoute les attributs tabindex à toutes les figures
function addTabIndexToFigures() {
  const figures = document.querySelectorAll("figure");
  figures.forEach((figure, index) => {
    figure.setAttribute("tabindex", "0");
    console.log(`Tabindex added to figure ${index + 1}`);
    
    // Ajout des écouteurs pour les événements clavier et souris
    figure.addEventListener("mouseover", highlightFigure);
    figure.addEventListener("mouseleave", resetFigure);
    figure.addEventListener("focus", highlightFigure);
    figure.addEventListener("blur", resetFigure);
  });
}

// Fonction pour surligner une figure (quand la souris est dessus ou qu'elle est en focus)
function highlightFigure(event) {
  const figure = event.currentTarget;
  figure.style.borderColor = "#007BFF";
  figure.style.transform = "scale(1.05)";
  console.log(`Figure highlighted: ${figure.querySelector("figcaption").textContent}`);
}

// Fonction pour réinitialiser une figure (quand la souris quitte ou perd le focus)
function resetFigure(event) {
  const figure = event.currentTarget;
  figure.style.borderColor = "transparent";
  figure.style.transform = "scale(1)";
  console.log(`Figure reset: ${figure.querySelector("figcaption").textContent}`);
}
