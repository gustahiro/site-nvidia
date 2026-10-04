// Biblioteca 1: AOS (Animate On Scroll) - anima os elementos ao rolar a página
AOS.init({ duration: 800, once: true });

// Biblioteca 2: Swiper - carrossel de produtos
new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: { 700: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }
});

// Biblioteca 3: Coloris - seletor de cor que muda a cor de destaque do site
Coloris({
  el: ".coloris",
  theme: "large",
  themeMode: "dark",
  alpha: false,
  format: "hex",
  swatches: ["#76b900", "#00a3ff", "#ff3d3d", "#ffb800", "#b84dff", "#ffffff"]
});
document.getElementById("seletor-cor").addEventListener("input", function (e) {
  document.documentElement.style.setProperty("--verde", e.target.value);
});
