// Animaciones suaves al hacer scroll
const elements = document.querySelectorAll("[data-animate]");
const onScroll = () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", onScroll);
onScroll();

// Cambiar navbar al hacer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Ejemplo: carga de eventos (se puede conectar luego a Supabase)
const contenedorEventos = document.getElementById("event-list");
contenedorEventos.innerHTML = `
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
