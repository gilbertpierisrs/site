// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with persistence + system preference
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector(".theme-icon");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// Print / Download PDF
document.getElementById("print-btn").addEventListener("click", () => window.print());
