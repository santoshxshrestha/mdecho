document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;
  const button = document.querySelector(".theme-toggle");

  if (savedTheme === "light") {
    html.setAttribute("data-theme", "light");
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }

  const savedEditor = localStorage.getItem("editor");
  if (savedEditor === "vscode") {
    vimModeEnabled = true;
  } else if (savedEditor === "vim") {
    vimModeEnabled = false;
  }
});

function toggleTheme() {
  const html = document.documentElement;
  const button = document.querySelector(".theme-toggle");

  if (html.getAttribute("data-theme") === "light") {
    html.removeAttribute("data-theme");
    button.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
    button.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
}
