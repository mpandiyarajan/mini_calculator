// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let currentInput = '';

    function clearDisplay() {
        currentInput = '';
        display.textContent = '0';
       }

    function deleteLast() {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    }

    function appendCharacter(char) {
        // Allow only digits and basic operators, modify as needed
        if (/^[0-9+\-*/.]$/.test(char)) {
            currentInput += char;
            display.textContent = currentInput;
        }
    }

    function calculateResult() {
        try {
            // Evaluate the mathematical expression safely
            currentInput = Function(`'use strict'; return (${currentInput})`)().toString();
            display.textContent = currentInput;
        } catch {
            display.textContent = 'Error';
            currentInput = '';
        }
    }

    // Expose functions to global scope if needed for inline event handlers
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.appendCharacter = appendCharacter;
    window.calculateResult = calculateResult;
});
