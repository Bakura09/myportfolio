// toggle dark/light mode

// Access the DOM
let switchIcon = document.getElementById("themeToggle");
const lightIcon = "bi bi-brightness-high btn";
const darkIcon = "bi bi-moon-stars-fill btn";
const darkTheme = "dark";
const lightTheme = "light";

// Action function

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  // const newTheme = currentTheme === "dark" ? "light" : "dark";

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", lightTheme);
    switchIcon.setAttribute("class", lightIcon);
  }

  if (currentTheme === "light") {
    document.body.setAttribute("data-theme", darkTheme);
    switchIcon.setAttribute("class", darkIcon);
  }
}
