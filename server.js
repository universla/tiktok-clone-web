
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// API de ejemplo para traer videos
app.get("/api/videos", (req, res) => {
  res.json([
    { id: 1, url: "https://www.w3schools.com/html/mov_bbb.mp4 ", user: "Usuario1" },
    { id: 2, url: "https://www.w3schools.com/html/movie.mp4 ", user: "Usuario2" }
  ]);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
