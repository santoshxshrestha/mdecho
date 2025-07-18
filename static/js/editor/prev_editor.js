document.addEventListener("DOMContentLoaded", function() {
    const savedEditor = localStorage.getItem("editor");
    const html = document.documentElement;
    const button = document.querySelector("#toggleVimMode");

    if (savedEditor === "vscode") {
       vimModeEnabled  = true;
    } else if(savedEditor === "vim") 
       vimModeEnabled  = false;
    }
});
