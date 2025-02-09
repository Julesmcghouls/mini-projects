// Get the Dark/Light mode toggle button
const toggleButton = document.getElementById("toggle-theme");

// Add a click event listener to toggle dark mode
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update button text based on mode
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
});