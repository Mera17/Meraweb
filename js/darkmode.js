// darkmode.js
document.addEventListener('DOMContentLoaded', function () {
    const darkModeIcon = document.getElementById('darkMode-icon');
    const body = document.body;

    const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
    if (isDarkModeSaved) {
        enableDarkMode();
    }

    darkModeIcon.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        darkModeIcon.classList.add('bx-sun');
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }

    function disableDarkMode() {
        darkModeIcon.classList.remove('bx-sun');
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});
