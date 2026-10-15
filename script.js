const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
const suporteHover = window.matchMedia("(hover: hover) and (pointer: fine)");
let efeitoHero;
let efeitoDemo;

if (!movimentoReduzido.matches && window.innerWidth > 600 && window.VANTA && window.VANTA.NET) {
  efeitoHero = window.VANTA.NET({
    el: document.querySelector(".hero"),
    color: 0x76b900,
    backgroundColor: 0x050800,
    points: window.innerWidth <= 600 ? 6 : 10,
    maxDistance: window.innerWidth <= 600 ? 16 : 22,
    spacing: window.innerWidth <= 600 ? 22 : 18,
    showDots: true,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200
  });
}

if (!movimentoReduzido.matches && window.innerWidth > 600 && window.VANTA && window.VANTA.NET) {
  efeitoDemo = window.VANTA.NET({
    el: document.querySelector("#vanta-demo"),
    color: 0x76b900,
    backgroundColor: 0x050800,
    points: 8,
    maxDistance: 20,
    spacing: 18,
    showDots: true,
    mouseControls: true,
    touchControls: false,
    gyroControls: false,
    minHeight: 150,
    minWidth: 200
  });
}

if (!movimentoReduzido.matches && window.innerWidth > 600 && suporteHover.matches && window.VanillaTilt) {
  window.VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.12,
    scale: 1.02,
    perspective: 1000
  });
}

window.addEventListener("pagehide", () => {
  if (efeitoHero) efeitoHero.destroy();
  if (efeitoDemo) efeitoDemo.destroy();
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
document.querySelectorAll(".coloris").forEach((input) => {
  input.addEventListener("input", (event) => {
    document.documentElement.style.setProperty("--verde", event.target.value);
    document.querySelectorAll(".coloris").forEach((colorPicker) => {
      if (colorPicker !== event.target) colorPicker.value = event.target.value;
    });
  });
});
