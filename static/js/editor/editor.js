let editor;
let vimModeEnabled = false;

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('editor-textarea');

    editor = CodeMirror.fromTextArea(textarea, {
        mode: 'markdown',
        lineNumbers: true,
        lineWrapping: true,
        theme: 'mytheme'
    });

    editor.on('change', function(cm) {
        textarea.value = cm.getValue();
        htmx.trigger(textarea, 'keyup');
    });

    editor.setValue(textarea.placeholder);
});

function toggleVimMode() {
    const toggleButton = document.getElementById('vim-toggle');

    if (vimModeEnabled) {
        editor.setOption('keyMap', 'default');
        toggleButton.textContent = ' ';
        vimModeEnabled = false;
        localStorage.setItem("editor", "vim");
    } else {
        editor.setOption('keyMap', 'vim');
        toggleButton.textContent = ' ';
        vimModeEnabled = true;
        localStorage.setItem("editor", "vscode");
    }

    editor.focus();
}

