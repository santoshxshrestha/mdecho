function highlightBlocks(root = document) {
  if (!window.hljs) return;
  root.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
}

function syncHighlightTheme(theme) {
  const dark = document.getElementById("hljs-theme-dark");
  const light = document.getElementById("hljs-theme-light");
  if (!dark || !light) return;
  if (theme === "light") {
    dark.disabled = true;
    light.disabled = false;
  } else {
    dark.disabled = false;
    light.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;
  const button = document.querySelector(".theme-toggle");

  if (savedTheme === "light") {
    html.setAttribute("data-theme", "light");
    button.textContent = "\u2600\uFE0F";
    syncHighlightTheme("light");
  } else {
    button.textContent = "\uD83C\uDF19";
    syncHighlightTheme("dark");
  }

  highlightBlocks();

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
    button.textContent = "\uD83C\uDF19";
    localStorage.setItem("theme", "dark");
    syncHighlightTheme("dark");
  } else {
    html.setAttribute("data-theme", "light");
    button.textContent = "\u2600\uFE0F";
    localStorage.setItem("theme", "light");
    syncHighlightTheme("light");
  }
}
