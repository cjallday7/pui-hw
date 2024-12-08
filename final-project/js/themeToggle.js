// Select the theme button
const themeButton = document.querySelector('.theme');

// Function to toggle between light and dark mode
function toggleTheme() {
    // Check the current theme on the document's body
    const currentTheme = document.body.dataset.theme;

    if (currentTheme === 'dark') {
        // Switch to light mode
        document.body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        // Switch to dark mode
        document.body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark'); // Save preference
    }
}

// Add an event listener to the button
themeButton.addEventListener('click', toggleTheme);

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    document.body.dataset.theme = savedTheme;
});