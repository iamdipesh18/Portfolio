// Dark Mode Toggle JavaScript
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle the moon/sun icon
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '🌞';  // Sun icon for light mode
    } else {
        darkModeToggle.innerHTML = '🌙';  // Moon icon for dark mode
    }
});
