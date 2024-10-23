document.getElementById('myForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name === '') {
        alert('Name is required');
        event.preventDefault();
    } else if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email');
        event.preventDefault(); // Prevent form submission if email is invalid
    }
});