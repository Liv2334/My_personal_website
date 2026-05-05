const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  // toggle dark mode
  body.classList.toggle("dark_mode_body");

  // toggle shape
  toggle.classList.toggle("circle-shape");
});
