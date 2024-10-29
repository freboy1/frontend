            // Function to handle login or logout based on localStorage
            function handleAuth() {
                const users = JSON.parse(localStorage.getItem('users'));
            
                if (users && users.length > 0) {
                    // If users exist, perform logout
                    localStorage.removeItem('theme');
                    localStorage.removeItem('users');
                    localStorage.removeItem('currentUserEmail');
            
                    // Redirect to login page
                    window.location.href = 'login.html';
                } else {
                    // If no users, redirect to login page
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
            