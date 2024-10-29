document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('form2Example1').value;
    const password = document.getElementById('form2Example2').value;

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        const user = users.find(user => user.email === email);
        setTheme(user.theme); // Set user-specific theme
        window.location.href = 'index.html';
    } else {
        // If user doesn't exist, create a new one
        users.push({ email, password, theme: 'light' }); // Default theme is 'light'
        localStorage.setItem('users', JSON.stringify(users));
        setTheme('light'); // Set default theme for new user
        window.location.href = 'index.html';
    }
});

// Function to set the theme
function setTheme(theme) {
    document.body.className = theme; // Set class for light or dark theme
    localStorage.setItem('theme', theme); // Save current theme in localStorage
}

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); // Update the theme
}

// Check the saved theme in localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme); // Apply the saved theme

    // Update the Logout/Login button based on user data
    updateAuthButton();
});

// Function to update the Auth button based on user presence in localStorage
function updateAuthButton() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const logoutButton = document.getElementById('logoutButton');
    
    if (users.length > 0) {
        // If there are users, show Logout button
        logoutButton.textContent = 'Logout';
        logoutButton.onclick = logout; // Set logout function
    } else {
        // If no users, show Login button
        logoutButton.textContent = 'Login';
        logoutButton.onclick = function() {
            window.location.href = 'login.html'; // Redirect to login page
        };
    }
}

// Function to log out the user
function logout() {
    // Clear the theme and user session data
    localStorage.removeItem('theme');
    localStorage.removeItem('users'); // Optionally clear all users or just reset state

    // Redirect to login page
    window.location.href = 'login.html';
}