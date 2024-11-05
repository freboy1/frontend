document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('form2Example1').value;
    const password = document.getElementById('form2Example2').value;

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        const user = users.find(user => user.email === email);
        if (user.password === password) {
            localStorage.setItem('currentUser', JSON.stringify(user)); // Track the logged-in user
            setTheme(user.theme, email); // Set user-specific theme
            window.location.href = 'index.html';
        } else {
            alert("Incorrect password.");
        }
    } else {
        // If user doesn't exist, create a new one
        const newUser = { email, password, theme: 'light' }; // Default theme is 'light'
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser)); // Track new user
        setTheme('light', email); // Set default theme for new user
        window.location.href = 'index.html';
    }
});

// Function to set the theme
function setTheme(theme, userEmail = null) {
    document.body.className = theme; // Set class for light or dark theme

    // Update the current user's theme if an email is provided
    if (userEmail) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(user => user.email === userEmail);
        
        if (userIndex !== -1) {
            users[userIndex].theme = theme; // Update theme for the specific user
            localStorage.setItem('users', JSON.stringify(users)); // Save updated users array
        }

        // Update the current user's theme in localStorage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.email === userEmail) {
            currentUser.theme = theme;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }
}

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('currentUser')).theme || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        setTheme(newTheme, currentUser.email); // Update the theme for the current user
    }
}

// Check the saved theme in localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentTheme = currentUser ? currentUser.theme : 'light';
    setTheme(currentTheme, currentUser ? currentUser.email : null); // Apply the saved theme

    // Update the Logout/Login button based on user data
    updateAuthButton();
});

// Function to update the Auth button based on user presence in localStorage
function updateAuthButton() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const logoutButton = document.getElementById('logoutButton');
    
    if (currentUser) {
        // If a user is logged in, show Logout button
        logoutButton.textContent = 'Logout';
        logoutButton.onclick = logout; // Set logout function
    } else {
        // If no user is logged in, show Login button
        logoutButton.textContent = 'Login';
        logoutButton.onclick = function() {
            window.location.href = 'login.html'; // Redirect to login page
        };
    }
}

// Function to log out the current user
function logout() {
    // Clear the theme and current user session data
    localStorage.removeItem('currentUser'); // Only log out the current user

    // Redirect to login page
    window.location.href = 'login.html';
}