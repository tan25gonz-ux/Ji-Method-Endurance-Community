// === PRELOADER ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => preloader.style.display = "none", 3000);
});

// === Scroll Animations ===
const elements = document.querySelectorAll("[data-animate]");
const onScroll = () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add("visible");
  });
};
window.addEventListener("scroll", onScroll);
onScroll();

// Navbar color on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Eventos demo
document.getElementById("event-list").innerHTML = `
  <div class="event-card">
    <img src="https://placehold.co/300x200" alt="Evento 1">
    <h3>Entrenamiento Dominical</h3>
    <p>Reunión semanal en el parque para todos los niveles.</p>
    <small>20 Octubre 2025</small>
  </div>
  <div class="event-card">
    <img src="https://placehold.co/300x200" alt="Evento 2">
    <h3>Carrera Solidaria 10K</h3>
    <p>Evento benéfico para apoyar la salud y el deporte.</p>
    <small>27 Octubre 2025</small>
  </div>
`;

// === Lightbox ===
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => lightbox.style.display = "none");
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.style.display = "none"; });
