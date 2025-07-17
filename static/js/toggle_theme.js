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
