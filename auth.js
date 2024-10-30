            // Function to handle login or logout based on localStorage
// Function to handle login or logout based on localStorage
function handleAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // Remove only the current user session data, keep users array intact
        localStorage.removeItem('currentUser');
        
        // Redirect to login page
        window.location.href = 'login.html';
    } else {
        // If no current user is logged in, redirect to login page
        window.location.href = 'login.html';
    }
}

            
            // Function to set the initial button text based on localStorage
            function setAuthButtonText() {
                const users = JSON.parse(localStorage.getItem('users'));
                const authButton = document.getElementById('authButton');
            
                // Set button text based on presence of users
                authButton.textContent = (users && users.length > 0) ? 'Logout' : 'Login';
            }
            
            // Set the button text on page load
            window.addEventListener('DOMContentLoaded', setAuthButtonText);
