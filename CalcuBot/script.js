// JavaScript functionality for Calcubot

document.addEventListener("DOMContentLoaded", function () {
    // Selecting essential elements
    const form = document.getElementById("calculator-form");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const resultDiv = document.getElementById("result");
    const mouth = document.querySelector(".mouth");

    // Event listener for form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the page from reloading

        // Parse user input values
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        // Initialize result variable
        let result;

        // Perform calculation based on selected operation
        if (operation === "add") {
            result = num1 + num2; // Add numbers
        } else if (operation === "subtract") {
            result = num1 - num2; // Subtract numbers
        } else if (operation === "multiply") {
            result = num1 * num2; // Multiply numbers
        } else if (operation === "divide") {
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; // Handle division
        } else {
            result = "Invalid operation selected!"; // Fallback message
        }

        // Show mouth animation while computing
        mouth.classList.add("computing");

        // Simulate computation delay with setTimeout
        setTimeout(() => {
            mouth.classList.remove("computing"); // Stop animation

            // Display result to the user
            resultDiv.textContent = `Result: ${result}`;
        }, 500); // 500ms delay for animation effect
    });
});
