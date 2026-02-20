// Character sets
const CHARACTERS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// DOM elements
const passwordOutput = document.getElementById('passwordOutput');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');

// Update length display
function updateLength() {
    lengthValue.textContent = lengthInput.value;
}

// Generate password
function generatePassword() {
    const length = parseInt(lengthInput.value);
    
    // Build character pool based on selected options
    let charPool = '';
    if (uppercaseCheck.checked) charPool += CHARACTERS.uppercase;
    if (lowercaseCheck.checked) charPool += CHARACTERS.lowercase;
    if (numbersCheck.checked) charPool += CHARACTERS.numbers;
    if (symbolsCheck.checked) charPool += CHARACTERS.symbols;

    // Check if at least one character type is selected
    if (charPool === '') {
        alert('Please select at least one character type!');
        return;
    }

    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    passwordOutput.value = password;
}

// Copy to clipboard
function copyPassword() {
    if (passwordOutput.value && passwordOutput.value !== 'Click Generate') {
        navigator.clipboard.writeText(passwordOutput.value)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                alert('Failed to copy password');
            });
    }
}

// Generate initial password on page load
window.onload = () => {
    generatePassword();
};