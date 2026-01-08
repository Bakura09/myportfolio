// toggle dark/light mode

// Access the DOM
const toggle = document.getElementById("toggle-theme");

// Action function
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
}

// Event Listener
toggle.addEventListener("click", toggleTheme);
