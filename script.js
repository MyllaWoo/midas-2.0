// Alternar entre tema claro e escuro
document.getElementById("toggle-theme").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

// Alternar entre fontes
document.getElementById("toggle-font").addEventListener("click", function() {
  const currentFont = document.body.style.fontFamily;
  document.body.style.fontFamily = currentFont === "Helvetica" ? "Arial" : "Helvetica";
});

// Slideshow automático
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides() {
  slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "block" : "none";
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

// Muda de imagem a cada 3 segundos
setInterval(showSlides, 3000);
showSlides();
