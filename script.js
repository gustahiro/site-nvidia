// Biblioteca 1: GSAP - animação de entrada do topo da página
gsap.from(".anima", { y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" });

// Biblioteca 2: Swiper - carrossel de produtos
new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: { 700: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }
});

// Biblioteca 3: Chart.js - gráfico de barras (dados fictícios)
new Chart(document.getElementById("grafico"), {
  type: "bar",
  data: {
    labels: ["Geração 1", "Geração 2", "Geração 3", "Geração 4"],
    datasets: [{ label: "Desempenho relativo", data: [1, 2.5, 5, 9], backgroundColor: "#000000" }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});
