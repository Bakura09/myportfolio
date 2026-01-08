// toggle dark/light mode

// Access the DOM
const toggle = document.getElementById("toggle-theme");
const switchIcon = document.getElementById("themeToggle");
// Action function
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  switchIcon = switchIcon.setAttribute("class", '"bi bi-brightness-high btn"');
}

// Event Listener
toggle.addEventListener("click", toggleTheme);
