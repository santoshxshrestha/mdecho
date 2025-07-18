document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;
    const button = document.querySelector(".theme-toggle");

    if (savedTheme === "light") {
        html.setAttribute("data-theme", "light");
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
});
