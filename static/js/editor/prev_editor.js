document.addEventListener("DOMContentLoaded", function() {
   const savedEditor = localStorage.getItem("editor");
   if (savedEditor === "vscode") {
      vimModeEnabled = true;
   } else if (savedEditor === "vim") {
      vimModeEnabled = false;
   }
});
