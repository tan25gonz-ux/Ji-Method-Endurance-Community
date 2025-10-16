// === Ji-Method Web con Supabase ===
// (Cargar eventos y galería)

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "TU_SUPABASE_URL";
const SUPABASE_KEY = "TU_SUPABASE_ANON_KEY";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Cargar eventos
async function cargarEventos() {
  const { data, error } = await supabase.from("eventos").select("*").order("fecha", { ascending: true });
  const contenedor = document.getElementById("event-list");
  if (error) return console.error(error);
  contenedor.innerHTML = data.map(e => `
    <div class="event-card">
      <img src="${e.imagen_url || 'https://placehold.co/300x200'}" alt="">
      <h3>${e.titulo}</h3>
      <p>${e.descripcion}</p>
      <small>${new Date(e.fecha).toLocaleDateString()}</small>
    </div>
  `).join("");
}

// Cargar galería
async function cargarGaleria() {
  const { data, error } = await supabase.from("galeria").select("*").order("creado_en", { ascending: false });
  const grid = document.getElementById("gallery-grid");
  if (error) return console.error(error);
  grid.innerHTML = data.map(f => `<img src="${f.imagen_url}" alt="${f.titulo}">`).join("");
}

cargarEventos();
cargarGaleria();
